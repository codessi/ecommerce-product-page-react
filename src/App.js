
import React,{useState} from 'react';
import './App.scss';
import Nav from "./components/Nav"
import Products from './components/Products'
import Content from './components/Content';
import Shopping from './components/Shopping';



function App() {
  const [purchase, setPurchase] = useState(0)
  
  return (
    <>
    <Nav purchase ={purchase} setPurchase={setPurchase}/> 
    <div className="desktop-group">
      <Products />
      <div className="desktop-right">
        <Content />
        <Shopping purchase ={purchase} setPurchase={setPurchase}/>
      </div>
    </div>
    </>
  );
}

export default App;
