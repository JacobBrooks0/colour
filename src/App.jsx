import Nav from './Nav';
import {Home,Colors,PickColor} from './pages';
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
          {/* <Route path="/new" element={<CreateColor />}/>  */}
          <Route path="colors">
            <Route index element={<Colors />}/>  
            <Route path=":color" element={<PickColor />}/> 
          </Route>
          <Route path="*" element={<h1>Not Found</h1>}/>  
        </Route>
      </Routes>
    </div>
  )
}

export default App
