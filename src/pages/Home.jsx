import React from 'react'

import PolicyHead from '../components/policy-head/PolicyHead';
import ProductHead from '../components/product-head/ProductHead';
import SlideHead from '../components/slide-head/SlideHead';

const PageHead = () => {

  window.scroll(0,0);

  return (
    <div className='page-head'>
      <div className='page-head__slice'>
        <SlideHead />
      </div>
      <div className='page-head__policy'>
        <PolicyHead /> 
      </div>
      <div className='page-head__product'>
        <ProductHead />
      </div>
    </div>
  )
}

export default PageHead