
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter >

         <Routes>
           <Route path="/" exact  element={<HomePage/>}/>
     
         </Routes>
      
      
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
