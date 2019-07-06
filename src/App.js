import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import ShoppingPage from './components/shoppingPage';
import store from './store/index';

function App() {
  return (
    <div className='row'>
      <ShoppingPage store={store} />
    </div>
  );
}

export default App;
