import express from 'express'
import http from 'http'

import * as router from './router'

const app = express()
const server = http.createServer(app)

const start = async () => {
  try {
    const { PORT } = process.env

    app
      .set('env', 'production')
      .use(express.json())
      .use(router.routes)
      .use(function (_, res) {
        res.status(404).send('Resource not found')
      })

    console.info('Server successfully built and ready to boot')

    server.listen(PORT, () => console.info(`Server running on http://localhost:${PORT}`))
  } catch (error) {
    console.error('Server server could not be initialized.')
    console.error(error)
    throw error
  }
}

start()
