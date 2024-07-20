import { request } from 'undici'
import type BodyReadable from 'undici/types/readable'
import type { Url, UrlObject } from 'url'

export class ClientService {
  async get(url: string | UrlObject | Url): Promise<Response> {
    const { statusCode, body } = await request(url)

    return new Promise<Response>((resolve, reject) => {
      resolve({
        status: statusCode,
        body: body
      }),
      reject()
    })
  }
}

export interface Response {
  status: Number
  body: BodyReadable
}
