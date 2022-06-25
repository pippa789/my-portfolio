
// import head from "../src/headimg.jpg"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact'
import index from './index';
import {Link} from 'react-router'

function App() {
return(
  <>
   <Router> 
   {/* <Navigation /> */}
   
    <Routes>
      <Route exact path = "/" element= {<Home/>} />
      <Route  exact path = "/About" element = {<About/>} />
      <Route  exact path = "/Projects" element = {<Projects/>} />
      <Route  exact path = "/Contact" element = {<Contact/>} />
    </Routes>
    
    
    </Router>
  </> 
)
}
export default App;
