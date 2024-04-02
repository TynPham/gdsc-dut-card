import { CardBodyReq } from 'src/types/card.type'
import http from 'src/utils/http'

const CARDS_URL = '/cards'

const cardApi = {
  createCard: (payload: CardBodyReq) => http.post<{ message: string }>(CARDS_URL, payload)
}

export default cardApi
