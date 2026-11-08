import React, { useState } from 'react';
import Wrapper from './wrapper';
import { useNavigate } from 'react-router';

export default function ProductCreation() {
  const [name,setName]=useState('')
  const [price,setPrice]=useState('')
  const [quantity,setQuantity]=useState('')
  const navigate = useNavigate();
  const submit = async e=>{
    console.log("i am here")
    e.preventDefault();
    await fetch('http://127.0.0.1:8000/products',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(
        {
          name,
          price,
          quantity
        }
      )
    })
    await navigate(-1)

  }
  return (
    <>
  <Wrapper>
  <form className='mt-3' onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="nameForm" className="form-label">
      Name
    </label>
    <input
      type="text"
      className="form-control"
      id="nameForm"
      placeholder="Name"
      onChange={e=> setName(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="priceForm" className="form-label">
      Price
    </label>
    <input
      type="number"
      className="form-control"
      id="priceForm"
      placeholder="Price"
      onChange={e=> setPrice(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="priceForm" className="form-label">
      Quantity
    </label>
    <input
      type="number"
      className="form-control"
      id="quantityForm"
      placeholder="Quantity"
      onChange={e=> setQuantity(e.target.value)}
    />
  </div>
  <button type='submit' className='btn btn-primary btn-lg'>Submit</button>
  </form>
  </Wrapper>  
</>
  );
}
