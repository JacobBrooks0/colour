import Nav from './Nav';
import {Home,Colors} from './pages';
import './App.css';
// roots acts as container for all root elements 
// , Color, CreateColor
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Nav/>}>   
          <Route index element={<Home />}/>        
          {/* <Route path="/createcolor" element={<Color />}/>  */}
          <Route path="colors">
            <Route index element={<Colors />}/>  
            {/* <Route path=":color" element={<PickColour />}/>   */}
          </Route>
          <Route path="*" element={<h1>Not Found</h1>}/>  
        </Route>
      </Routes>
    </div>
  )
}

export default App
