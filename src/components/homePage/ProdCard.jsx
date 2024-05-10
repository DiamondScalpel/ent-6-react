import React from 'react';
import './styles/prodCard.css'
import { useNavigate } from 'react-router-dom';

const ProdCard = ({prod}) => {

    const navigate = useNavigate();

    const handleView = () => {
      navigate(`/product/${prod.id}}`);
    }

    const handleBuy = () => {
      //
    }

  return (
    <article className='prodcard'>
        <figure className='prodcard__img'>
            <img src={prod.images[0].url} alt="product image" />
        </figure>
        <hr />
        <ul className='prodcard__list'>
            <li className='prodcard__item'><span>{prod.brand}</span><span>{prod.title}</span></li>
            <li className='prodcard__item'><span>Price: </span><span>$ {prod.price}</span></li>
        </ul>
        <div className='prodcard__buttons'>
          <button onClick={handleView}>View details</button>
          <button onClick={handleBuy}>Add to cart</button>
        </div>
    </article>
  )
}

export default ProdCard;