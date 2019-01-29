import { send } from 'micro'
import { router, get, AugmentedRequestHandler, ServerRequest, ServerResponse } from 'microrouter'

interface Hello {
  status: string
  data: ToWho
}

interface ToWho {
  toWho: string
}

const getHello: AugmentedRequestHandler = (req: ServerRequest, res: ServerResponse) => {
  const data: Hello = {
    status: 'ok',
    data: {
      toWho: req.params.toWho
    }
  }
  send(res, 200, data)
}

export default router(get('/hello/:toWho', getHello))
