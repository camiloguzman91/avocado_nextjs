import { IncomingMessage, ServerResponse } from 'http'
import DB from '../../../database/db'


const allAvos = async (request = IncomingMessage, response = ServerResponse ) => {
  const db = new DB()

  const id = request.query.id

  const avo = await db.getById(id)

  response.status(200).json(avo)
}

export default allAvos;