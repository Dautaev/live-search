import React from 'react';
import { useState } from 'react';
import ProductCard from './ProductCard';
import productsDataBase from './productData';

const SneakersShop = () => {
  const [value, setValue] = useState('') 
  const [product, setProduct] = useState(productsDataBase) 

  const filteredProducts = productsDataBase.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });


  return (
    <>
    <div className='wrapper'>
      <div className="inputContainer">
        <input className='handleInput' value={value} onChange={(e) => setValue(e.target.value)}/>
     </div>
      
    </div>
     <div className="productCardsContainer">
     {filteredProducts.map((item, index) => {
       return (
         <ProductCard img={item.img} name={item.name} price={item.price} />
       );
     })}
      </div>
      </>
    

  );

};

export default SneakersShop;