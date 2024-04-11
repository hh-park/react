import React, { useEffect, useState } from 'react';

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  // fetch('data/products.json')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log('got data');
  //     setProducts(data);
  //   });
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
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
  }, [checked]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <input type="checkbox" value={checked} onChange={handleChange} />
      <label htmlFor="checkbox">show only sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>{count}</button> */}
    </>
  );
}
