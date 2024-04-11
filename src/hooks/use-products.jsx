import { useEffect, useState } from 'react';

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [products, setProducts] = useState([]);

  // fetch('data/products.json')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log('got data');
  //     setProducts(data);
  //   });

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('got data');
        console.log(data);
        setProducts(data);
      })
      .catch((e) => setError('Error occured'))
      .finally(() => setLoading(false));
    return () => {
      console.log('cleaning');
    };
  }, [salesOnly]);

  return [loading, error, products];
}
