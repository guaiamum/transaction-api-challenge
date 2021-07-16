// import { getTransactions } from '../../utils/api';
import defaultTransactions from '../../utils/mocks';

export const fetchTransactions = ({ entry, inView, setTransactions, setLastTransaction, lastTransaction, transactions, setError }: any /** 🥲 */) =>
    () => {
        // avoid refetching when ref changes to next last 
        if (entry?.target && !inView) { return }

        // getTransactions({ last: lastTransaction })
        new Promise((res, rej) => {
            const timer = setTimeout(() => { clearTimeout(timer); res(undefined); }, 4000)
        })
            // .then((response) => {
            .then(() => {
                const response = defaultTransactions as TransactionResponse;
                if (response.count < 1) { throw Error("No transactions to display!") }

                !lastTransaction
                    ? setTransactions(response.items) // replaces skeleton
                    : setTransactions([...transactions, ...response.items])

                if (response.last?.id)
                    setLastTransaction(response.last)
            })
            .catch((error: Error) => {
                setError(error.message)
            })
    }