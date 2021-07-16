import { BASE_URL, SECRET_KEY, P_ID, endpoints, transactionChunkSize } from './constants'

const fetchJSONWrapper = ({ endpoint, method = 'GET' }: FetchProps) =>
    fetch(
        `${BASE_URL}${endpoint.replace('{programId}', P_ID)}`,
        {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Api-Key': SECRET_KEY
            }
        }
    )
        .then(r => r.json())
        .then((r) => {
            if (r.status !== 200) {
                throw Error('Network Error')
            }
            return r
        })

export function getTransactions({ last = '' }: GetTransactionParams = {}) {
    last &&= `&start=${encodeURIComponent(
        JSON.stringify(last)
    )}`
    const endpoint = `${endpoints['list']}?limit=${transactionChunkSize}${last}`

    return fetchJSONWrapper({ endpoint })
};