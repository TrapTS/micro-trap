import { send } from 'micro'
import { router, get, AugmentedRequestHandler } from 'microrouter'

const getHello: AugmentedRequestHandler = (req, res) => {
  const data = {
    status: 'ok',
    data: {
      toWho: req.params.toWho
    }
  }
  send(res, 200, data)
}

export default router(get('/hello/:toWho', getHello))
