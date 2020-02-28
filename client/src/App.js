import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/appNavBar.js';
import ShoppingList from './components/shoppingList.js';
import ItemModal from './components/itemModal.js';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
     <Provider store={store}>
    <div className="App">
         <AppNavbar/>
         <Container>
         <ItemModal />
         <ShoppingList/>
         </Container>
    </div>
    </Provider>
  );
}

export default App;
