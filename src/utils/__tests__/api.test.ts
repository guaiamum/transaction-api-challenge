import { getTransactions } from '../api';

jest.mock('../constants', () => ({
  _esModules: true,
  endpoints: {
    list: 'programs/{programId}/transactions'
  },
  transactionChunkSize: 1,
  BASE_URL: '',
  SECRET_KEY: 'SECRET_KEY',
  P_ID: 'P_ID'
}))

const transactionProps = {
  amount: 100,
  currency: 'GBP',
  datetime: new Date().toDateString(),
  card: {
    lastNumbers: '1234'
  }
}

describe('getTransactions', () => {
  it('should fetch from list endpoint', async () => {
    const result = await getTransactions()

    expect(result).toMatchObject({ status: 200, count: 2 })
  })
  it('should fetch from list endpoint with start param', async () => {
    const result = await getTransactions({ last: { id: 'id', ...transactionProps } })

    expect(result).toMatchObject({ status: 200, count: 1 })
  })
  it('should throw error', () => {
    expect.assertions(1);

    return expect(getTransactions({ last: { id: 'error', ...transactionProps } }))
      .rejects
      .toEqual(Error('Network Error'));
  })
})