import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { user, blog } from './routes'

const app = new Hono()

// Add this BEFORE routes
app.use('*', cors({
  origin: 'http://localhost:5173', // your frontend
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}))

app.route('/api/v1/users', user)
app.route('/api/v1/blog', blog)

export default app
