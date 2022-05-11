import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import './App.css';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = '/';
        });
    };
    return (
        <Router className="App">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/create-post">Create</Link>
                {!isAuth ? (
                    <Link to="/login">Login</Link>
                ) : (
                    <button onClick={signUserOut}>Log out</button>
                )}
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route
                    path="/login"
                    element={<Login setIsAuth={setIsAuth} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
