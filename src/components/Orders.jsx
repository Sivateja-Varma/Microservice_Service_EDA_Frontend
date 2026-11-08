import React, { useEffect, useState } from 'react';

export default function OrdersComp() {
  const [id,setId]= useState('')
  const [quant,setQuant]=useState('')
  const [message,setMessage]=useState('buy your favourite product')
  useEffect(() => {
  // Only run the fetch if an ID actually exists
  if (id) {
    (async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/product/${id}`);
        const content = await response.json();
        

        setMessage(`Your product price is $${content.price}`);
      } catch (e) {
        setMessage('Buy your favorite product');
      }
    })();
  }
}, [id]); 


  async function submit(event) {
    event.preventDefault();
    await fetch('http://127.0.0.1:8001/payment',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        id: id,
        quantity: quant 
      })
      
    })
    setMessage("Thank you for ur purchase")
  }
  return (
    <>
    <div className="container">
  <main>
    <div className="py-5 text-center">
      <h2>Checkout form</h2>
      <p className="lead">{message}</p>
    </div>
    <form onSubmit={submit}>
      <div className="row g-3">
        <div className="col-sm-6">
          <label className="form-label">Product</label>
          <input className="form-control" 
          onChange={e=>setId(e.target.value)}/>

        </div>
        <div className="col-sm-6">
          <label className="form-label">Quantity</label>
          <input type="number" className="form-control"
          onChange={e=>setQuant(e.target.value)} />
        </div>
      </div>
      <hr className="my-4" />
      <button className="w-100 btn btn-primary btn-lg" type="submit">
        Buy
      </button>
    </form>
  </main>
</div>

    
    </>
  );
}
