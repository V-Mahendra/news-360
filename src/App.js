import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Category from './components/Category';

// import NewsDb from './components/NewsDb';
import Pages from './pages/Pages';


function App() {

   
  return (
    <div className="App">
      <BrowserRouter>

      
      <Category />
      <Pages />

      </BrowserRouter>
      
      </div>
     
  );
}

export default App;
