import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { handlers } from '../src/utils/server-handlers'

const server = setupServer(...handlers)

export { server, rest }
