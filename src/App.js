
import './App.css';
import {

  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom'
import Home from './Screens/Home'
import Register from './Screens/Register'
import Signin from './Screens/Signin'

function App() {
  return (

    <Router>

    <div className="App">
      
      <Routes>
       
       <Route exact path='/' element={<Home/>} > </Route>
       <Route exact path='/register' element={<Register/>} > </Route>
       <Route exact path='/signin' element={<Signin/>} > </Route>

      </Routes>

    </div>

    </Router>


  );
}

export default App;
