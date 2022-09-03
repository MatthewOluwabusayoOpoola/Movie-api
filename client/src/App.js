import './App.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Navigate as Redirect,
} from "react-router-dom";

function App() {
  const user = true;
  return(
    <Router>
       

      <Routes>
            <Route path="/">
            <Route index  element={user ? <Home /> : <Redirect to="/register"/>}/>
            <Route path="login"  element={!user ? <Register /> : <Redirect to="/"/>}/>
            <Route path="login"  element={!user ? <Login /> : <Redirect to="/"/>}/>
            {user && (
              <>
              <Route path="movies" element={<Home type="movies"/>}/>
              <Route path="series" element={<Home type="series"/>}/>
              </>
            )}
            </Route>
          </Routes>
    </Router>
    
    );
}

export default App;
