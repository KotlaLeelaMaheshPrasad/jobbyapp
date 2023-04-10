
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Job from './components/Job';
import Jobs from './components/Jobs';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<ProtectedRoute><Home /> </ProtectedRoute>}/>
        <Route exact path ="/login" element = {<Login />}/>
        <Route exact path ="/jobs" element = {<ProtectedRoute><Jobs /></ProtectedRoute>}/>
        <Route exact path = "/jobs/:id" element ={<ProtectedRoute><Job /></ProtectedRoute>}/>
        <Route exact path ="/:sdf" element = {<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
