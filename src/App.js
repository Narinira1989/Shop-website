import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from './Contact';

function App() {
  return <Router>
    <nav>
      <Link to="/" className='link'>Shop</Link>
      <Link to="/about" className='link'>About</Link>
      <Link to="/contact" className='link'>Contact</Link>
    </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    
  </Router>
}

export default App;

// import './App.css';
// import { useState } from 'react';
// import { data } from './data';
// import Clothes from './Clothes';
// import Buttons from './Buttons';

// function App(){
//   // //Задаем состояние
//   // const [clothes, setClothes] = useState(data);
//   // //Всю логику мы напишем здесь и потом передадим ее в buttons
//   // //Метод filter будем прописывать здесь и мотом с помощью props передадим ее в другой документ
//   // // Мы определенным образом отфильтруем наши товары
//   // //т.е. если кликнем на кнопку платье, то будут показаны только платья и т.д.

//   // const chosenClothes = (searchTerm) => {
//   //   const newClothes = data.filter(element => element.searchTerm === searchTerm );
//   //   setClothes(newClothes);
//   // }

//   // return(
//   //   <div>
//   //     <div className='cont'>
//   //       <h2 className='back'>Free Standart Shipping</h2>
//   //     </div>
//   //     {/* Передаем компонент buttons */}
//   //     <Buttons filteredClothes={chosenClothes}/>
//   //     {/* //Передаем компонент */}
//   //     <Clothes itemsForSale={clothes} />
//   //   </div>
//   // )
// }
// export default App;
