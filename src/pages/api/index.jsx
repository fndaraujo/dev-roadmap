import { data } from 'src/database/data'

export default function handler(request, response) {
  switch (request.method) {
    case 'GET':
      response.status(200).json(data)
      break
    default:
      response.status(400).json({ error: 'Method not allowed.' })
  }
}
