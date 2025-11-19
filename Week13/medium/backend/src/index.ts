import { Hono } from 'hono'
import { user, blog } from './routes'
 
const app = new Hono()

app.route('/api/v1/users', user)
app.route('/api/v1/blog', blog)

export default app
