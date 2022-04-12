import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  // initial state is set to false bc we do not want to see the cart popup as a default 

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      {/* only render cart component (the popup) when cartIsShown is true
      and when popup is closed */}

      {/* notes on onClose:
      we want to also close cart popup by clicking on backdrop
      notice how this is a cart component. go to Cart.js
      notice how there is a modal component in Cart.js. go to Modal.js 
      modal component is also used in Cart.js. go to Cart.js*/}
      <Header onShowCart={showCartHandler} />
      {/* notice this is a header component
      props is set up in Header.js. go down rabbit hole like we did above  */}
      <main>
          <Meals />
      </main>
    </Fragment>
  );
}

export default App;
