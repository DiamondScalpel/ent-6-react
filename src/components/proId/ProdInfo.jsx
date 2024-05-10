import React from 'react';

const ProdInfo = ({product}) => {
  
    // console.log(product);

    return (
    <article>
        <h3>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <div>
            <ul><li><span>Price </span><span>$ {product?.price}</span></li></ul>
        </div>
    </article>
  )
}

export default ProdInfo;