import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { App } from './src/App'

const PORT = 9000
const app = express()


app.get('*', (req, res) => {
  console.log('req:', req.url)

  const context = {}
  const myApp = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  const html = `
    <!DOCTYPE html>
      <html lang="en>
        <head>
          <meta charset="UTF-8">
          <title>Prueba de Server-Side Rendering</title>
        </head>
        <body>
          <div id="root">${myApp}</div>
        </body>
      </html>
  `

  if (context.url) { // url property added to context means a redirect has been requested
    return res.redirect(301, context.url)
  }

  if (context.status === 404) {
    // console.log('Route not found!')
    res.status(404)
  }

  res.send(html)
})

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))
