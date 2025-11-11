import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c:any,next : any ){
    if (c.req.header("Authorization")){
      //Do valication
      await next();
    }else{
      return c.text("You dont have access");
    }
}


//fetch-json
app.post('/', authMiddleware, async(c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello WOrld')
})

export default app
