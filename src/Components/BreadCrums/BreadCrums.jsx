import React from 'react'

const BreadCrums = (props) => {
  const {product} = props;
  return (
    <div className='bread-crums'>
      Home<img src='' alt='nnk' />
      shop<img src='' alt='nnk' />
      {product.category} <img src='' alt='nnk' />
      {product.name}
    </div>
  )
}

export default BreadCrums
