
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import LoginPage from './Pages/LoginPage';
import HowToUsePage from './Pages/HowToUsePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter >

         <Routes>
           <Route path="/" exact  element={<HomePage/>}/>
           <Route path="/contact" exact  element={<ContactPage/>}/>
           <Route path="/login" exact  element={<LoginPage/>}/>
           <Route path="/howtouse" exact  element={<HowToUsePage/>}/>
     
         </Routes>
      
      
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
