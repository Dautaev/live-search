import React from 'react';
import { useState } from 'react';

const ProductCard = ({name, price, img}) => {
  const [details, setDetails] = useState(false) 
  const [inBasket, setInBasket] = useState(false) 

  
  return (
      <div className="card">
      <img
        src={img} />
      
      <div className="infoContainer">
         <div className="name-price">
            <h3>{name}</h3>
          <h2>{price}</h2>
          </div>
        
        <div className="getDetalis">
          <button onClick={() => setDetails(!details)} className="butDetalis">Детали</button>
        </div>
      </div>
      {details && <div className="sectionContainer">
        <button onClick={() => setDetails(!details)}>X</button>
        <p className="fff">Замечательные кроссовки из известного бренда.</p>
      </div>}
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil vel
        ratione repellat sunt praesentium optio, recusandae saepe libero. Culpa
      </p>
      <div>
        {!inBasket ? <button onClick={() => setInBasket(true)}
          className="butDetalistwo">Добавить в корзину</button> :
          <button style={{opacity: '0.7'}} className="butDetalistwo">Уже в корзине</button>}
        {inBasket && <div onClick={() => setInBasket(false)} className='notInBasket' >Удалить из корзины</div>}     
       
      </div>
    </div>
    
  );
};

export default ProductCard;