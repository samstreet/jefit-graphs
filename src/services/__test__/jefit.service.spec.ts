import { describe, it, expect, beforeAll, vi } from 'vitest'
import { JefitService } from '../jefit.service'

let service: JefitService

vi.mock('undici.request', async () => {
  return {
    statusCode: 200,
    body: {},
    headers: {},
    trailers: null,
    opaque: null,
    context: null
  }
})

describe('Jefit Service Test', () => {
  beforeAll(() => {
    service = new JefitService()
    vi.resetAllMocks();
  })

  it('can call the jefit API', async () => {
    const { status } = await service.getUserData(400)

    expect(status).toBe(200)
  })

  it('can generate a jefit url', async () => {
    const url = await service.jfUrl(400)
    expect(url).toBe('https://www.jefit.com/400')
  })
})
