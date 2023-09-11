import { useState, useEffect } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

export default function TransactionForm({ uid }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { response, addDocument } = useFirestore('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ uid, name, amount }, response);
    addDocument({ uid, name, amount });
  };

  useEffect(() => {
    if (response) {
      setName('');
      setAmount('');
    }
  }, [response]);

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction Name:</span>
          <input
            type="text"
            autoComplete="on"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        <label>
          <span>Amount ($):</span>
          <input
            type="number"
            autoComplete="of"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  );
}
