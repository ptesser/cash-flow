import React, { useContext, useState, useEffect, SetStateAction, Dispatch } from 'react';
import { firestore } from 'firebase';
import 'firebase/firestore'

import './Transactions.css';

import { FirebaseContext } from '../../utils/firebase';
import { Transaction } from '../../models/transaction';

const Transactions: React.FC = () => {

  const firebase = useContext(FirebaseContext);
  const [transactions, setTransactions]: [Transaction[], Dispatch<SetStateAction<Transaction[]>>] = useState([] as Transaction[])

  const ref = firebase.firestore().collection(`transactions`);

  useEffect(() => {
    setAsyncTransactions();
  }, [])

  const setAsyncTransactions = async () => {
    const transactionsResponse = await getAsyncTransactions();
    setTransactions(transactionsResponse);
  }

  const getAsyncTransactions = async (): Promise<Transaction[]> => {
    try {
      const snapshot: firestore.QuerySnapshot = await ref.get();
      const transactions = snapshot.docs.map((transaction) => ({ id: transaction.id, ...transaction.data() }) as Transaction);
      return transactions;
    } catch (e) {
      return [];
    }
  }

  return (
    <div>
    </div>
  )
}

export default Transactions;