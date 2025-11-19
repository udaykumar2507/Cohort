import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { createMiddleware } from "hono/factory"
import type { Context } from 'hono'

// Import your Zod schemas
import { signupInput, signinInput, createBlogInput, updateBlogInput } from "@uday_kumar2507/medium-common"

const user = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>()

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
};

type Variables = {
  userId: string;
};

const blog = new Hono<{
  Bindings: Bindings,
  Variables: Variables,
}>()

// Prisma client
const prismaClient = (env: any) =>
  new PrismaClient({
    datasourceUrl: env.DATABASE_URL
  }).$extends(withAccelerate())

// ================= USER ROUTES =================

// Signup with Zod validation
user.post('/signup', async (c) => {
  try {
    const body = await c.req.json()
    const parsed = signupInput.parse(body) // Validate using Zod

    const prisma = prismaClient(c.env)
    const newUser = await prisma.user.create({
      data: {
        email: parsed.username,
        password: parsed.password
      }
    })

    const jwt = await sign({ id: newUser.id }, c.env.JWT_SECRET)
    return c.json({ message: "User Created Successfully", token: jwt })
  } catch (error) {
    return c.json({
      message: "Validation/Error Occurred",
      error: String(error)
    }, 400)
  }
})

// Signin with Zod validation
user.post('/signin', async (c) => {
  try {
    const body = await c.req.json()
    const parsed = signinInput.parse(body) // Validate

    const prisma = prismaClient(c.env)
    const user = await prisma.user.findFirst({ where: { email: parsed.username } })

    if (!user) return c.json({ message: "Email Not Found" }, 404)
    if (user.password !== parsed.password) return c.json({ message: "Invalid Password" }, 401)

    const token = await sign({ id: user.id }, c.env.JWT_SECRET)
    return c.json({ message: "Signin Successful", token })
  } catch (error) {
    return c.json({
      message: "Validation/Error Occurred",
      error: String(error)
    }, 400)
  }
})

// ================= BLOG ROUTES =================

// Auth middleware
type Env = {
  Bindings: {
    JWT_SECRET: string;
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
  };
};

export const useAuth = () => {
  return createMiddleware<Env>(async (c: Context<Env>, next) => {
    const header = c.req.header("authorization")
    if (!header) return c.json({ message: "Unauthorized - missing header" }, 403)

    const token = header.split(" ")[1]
    if (!token) return c.json({ message: "Unauthorized - missing token" }, 403)

    try {
      const payload = await verify(token, c.env.JWT_SECRET)
      if (!payload || typeof payload !== "object" || !("id" in payload)) {
        return c.json({ message: "Unauthorized - invalid token payload" }, 403)
      }

      c.set("userId", (payload as { id: string }).id)
      await next()
    } catch (err) {
      return c.json({ message: "Unauthorized - verify failed", error: String(err) }, 403)
    }
  })
}

blog.use("/*", useAuth())

// Create Blog with Zod validation
blog.post('/', async(c) => {
  try {
    const body = await c.req.json()
    const parsed = createBlogInput.parse(body)

    const prisma = prismaClient(c.env)
    const authorId = c.get("userId")

    const newPost = await prisma.post.create({
      data: {
        title: parsed.title,
        content: parsed.content,
        authorId
      }
    })

    return c.json({ id: newPost.id })
  } catch (error) {
    return c.json({ message: "Validation/Error Occurred", error: String(error) }, 400)
  }
})

// Update Blog with Zod validation
blog.put('/', async(c) => {
  try {
    const body = await c.req.json()
    const parsed = updateBlogInput.parse(body)

    const prisma = prismaClient(c.env)
    const updatedPost = await prisma.post.update({
      where: { id: parsed.id },
      data: { title: parsed.title, content: parsed.content }
    })

    return c.json({ id: updatedPost.id })
  } catch (error) {
    return c.json({ message: "Validation/Error Occurred", error: String(error) }, 400)
  }
})

export { user, blog }
