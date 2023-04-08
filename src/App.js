
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Job from './components/Job';
import Jobs from './components/Jobs';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<Home />}/>
        <Route exact path ="/login" element = {<Login />}/>
        <Route exact path ="/jobs" element = {<Jobs />}/>
        <Route exact path = "/jobs/:id" element ={<Job />}/>
        <Route exact path ="/:sdf" element = {<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
