import fastify from "fastify";

const app = fastify()


app.get('/hello', () => {
  return 'Hello New Dev Branch'
})


app.listen({
  port: 8080
}).then(() => {
  console.log('HTTP Server Running on Port http://localhost:8080')
})