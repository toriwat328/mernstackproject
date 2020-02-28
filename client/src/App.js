import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/appNavBar.js';
import ShoppingList from './components/shoppingList.js';


function App() {
  return (
    <div className="App">
     <AppNavbar/>
     <ShoppingList/>
    </div>
  );
}

export default App;
