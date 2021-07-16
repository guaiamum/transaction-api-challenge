export const endpoints = {
    list: 'programs/{programId}/transactions'
}

export const BASE_URL = 'https://api-dev.transactions.firebase/';

// loaded using this: https://create-react-app.dev/docs/adding-custom-environment-variables/
export const {
    REACT_APP_SECRET_KEY: SECRET_KEY,
    REACT_APP_P_ID: P_ID
} = process.env as unknown as CustomEnv

export const transactionChunkSize = 10