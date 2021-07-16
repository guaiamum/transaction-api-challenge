interface FetchProps {
    method?: string
    endpoint: string
}

interface Transaction {
    id: string
    amount: number
    currency: string
    datetime: string
    card: {
        lastNumbers: string
    }
}

type TransactionResponse = {
    count: number
    items: Transaction[]
    last?: Transaction
}

interface GetTransactionParams {
    last?: string | Transaction
}
interface CustomEnv extends ProcessEnv {
    REACT_APP_SECRET_KEY: string
    REACT_APP_P_ID: string
}