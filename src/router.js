import { Router } from 'express'

import * as analytics from './index'

export const routes =
  Router({ mergeParams: true })
    .get(['/'], (_, __) => __.send(''))
    .get(['/health'], (_, __) => __.json({ message: 'OK', version: '0.0.1' }))
    .post('/log', async (req, res) => {
      console.log('Body ---->', req.body)

      const { event, props } = req.body

      console.info(event, props)

      await analytics.log(undefined, event, props)

      res.send('OK')
    })
    .options('/*', function (_, res) {
      res.send(200)
    })
