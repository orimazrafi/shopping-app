import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import ShoppingPage from './components/shoppingPage';
import store from './store/index';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <ShoppingPage store={store} />
      </div>
    </div>
  );
}

export default App;
