import React ,{useContext} from 'react';
import './Menu.css'
import { CategoryContext } from '../Context/CategoryContext';


const Menu = ({ items }) => {

  const {addToCart}= useContext(CategoryContext);
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
            <button className='addToCartBttn' onClick={()=>addToCart}>Add To Cart</button>
          </article>
        );
      })}
      
    </div>
  );
};

export default Menu;
