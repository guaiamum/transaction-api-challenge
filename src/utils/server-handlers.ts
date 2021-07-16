import { rest } from 'msw'

const handlers = [
    rest.get('/programs/P_ID/transactions', (req, res, ctx) => {
        if (
            req.headers.get('Content-Type') !== 'application/json' ||
            (
                req.url.searchParams.has('start') && JSON.parse(req.url.searchParams.get('start') as string).id === 'error'
            )
        ) {
            return res(ctx.json({ status: 500, error: true }))
        }
        if (req.url.searchParams.has('start'))
            return res(ctx.json({ status: 200, count: 1, items: [8] }))
        return res(ctx.json({ status: 200, count: 2, items: [9] }))
    }),
]
export { handlers }