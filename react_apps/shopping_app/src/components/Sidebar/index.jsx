import { useContext } from 'react';
import './index.css';
import { primaryContext } from '../../context/PrimaryContext';

const Sidebar = () => {
  const { cart } = useContext(primaryContext);
    // cartItem = {productId: 6, howMany: 3}

  let totalNumber = cart.reduce((total, cartItem) => {
    return total + cartItem.howMany
  }, 0);


  return (
    <aside id="sidebar">
      <h1>sidebar</h1>
      <p>You have {totalNumber} items in your cart</p>
    </aside>
  )
}

export default Sidebar