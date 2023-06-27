
import './App.css';
import { HashRouter, Route, Routes} from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Job from './components/Job';
import Jobs from './components/Jobs';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path = "/" element = {<ProtectedRoute><Home /> </ProtectedRoute>}/>
        <Route exact path ="/login" element = {<Login />}/>
        <Route exact path = "/register" element = {<Register />}/>
        <Route exact path ="/jobs" element = {<ProtectedRoute><Jobs /></ProtectedRoute>}/>
        <Route exact path = "/jobs/:id" element ={<ProtectedRoute><Job /></ProtectedRoute>}/>
        <Route exact path ="/:sdf" element = {<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
