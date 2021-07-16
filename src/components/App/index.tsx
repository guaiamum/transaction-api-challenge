import { useEffect, useState } from 'react';
import './App.css';

import { useInView } from 'react-intersection-observer';
import TransactionItem from '../Transaction';
import { initialList, Skeleton } from './skeleton';
import { animationDelayOrchestrator } from '../../utils/animation';
import { fetchTransactions } from './hooks';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialList)
  const [error, setError] = useState('')
  const [lastTransaction, setLastTransaction] = useState<string | Transaction>('')

  const { ref, inView, entry } = useInView({ rootMargin: '-30% 0px 0px' });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    fetchTransactions({ entry, inView, setTransactions, setLastTransaction, lastTransaction, transactions, setError })
    , [inView]
  )

  const getIdx = animationDelayOrchestrator()
  return (
    <main className="App">
      <h1>Transactions</h1>
      {
        error
          ? <p className="App-errorHeading">{error}!</p>
          : transactions.map((t, i) => {
            return (t ?
              <TransactionItem
                key={t?.id}
                className="App-list__item"
                style={{ "--animation-order": `${getIdx()}` } as unknown as CSSStyleDeclaration}
                // @ts-ignore
                ref={t.id === lastTransaction?.id ? ref : null}
                transaction={t}
              />
              :
              <Skeleton key={`skltn-${i}`}/>)
          }
          )
      }
    </main>
  );
}

export default App;
