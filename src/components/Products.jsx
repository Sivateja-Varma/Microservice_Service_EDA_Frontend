import React, { useEffect, useState } from 'react';
import Wrapper from './wrapper';
import { NavLink } from 'react-router';

export default function Producttable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://127.0.0.1:8000/');
      const cont = await response.json();
      setProducts(cont);
    })(); // Added missing execution parentheses for the IIFE
  }, []);

  return (
    <>
      <Wrapper>
        <div>
          <NavLink to="/create" className="btn btn-sm btn-outline-secondary">Add</NavLink>
        </div>
        <div className="table-responsive small">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th> 
                <th scope="col">name</th>
                <th scope="col">price</th> 
                <th scope="col">quantity</th>
                <th scope="col">actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td> 
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <NavLink to="/" className="btn btn-sm btn-outline-secondary" onClick={
                      async () =>{
                        await fetch(`http://127.0.0.1:8000/products/${product.id}`,{
                          method:'delete'
                        })
                        setProducts(products.filter(p => p.id !== product.id))
                      }
                    }>Delete</NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Wrapper>
    </>
  );
}
