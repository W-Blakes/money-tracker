import { useState, useEffect, useRef } from 'react';
import { projectFirestore } from '../firebase/config';

export function useCollection(collection, _query, _orderBy) {
  const [documents, setDocuments] = useState('');
  const [error, setError] = useState('');

  //gets the current value query instead of referance type query['','']
  //breaks infinate loop in useEffect dependancy

  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }
    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
          //   console.log(results);
        });

        // update State
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("couldn't fetch data");
      }
    );

    // unsubcribe on unmount
    return () => {
      unsubscribe();
    };
  }, [collection, query, orderBy]);

  return { documents, error };
}
