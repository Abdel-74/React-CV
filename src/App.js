import './App.css';
import {useState,useEffect} from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Mentions from './pages/MentionsLégales';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Realisations from './pages/Réalisations';
import Blog from './pages/Blog';
import Footer from './components/Footer';

function App() {
    const [user, setUser] = useState([]);
    
    const getUser = async () => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        setUser(json);
    }
    useEffect (() => {
        getUser();
    }, []);

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Home user={user}/>}></Route>
                <Route path='/mentionslégales' element={<Mentions/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
                <Route path='/réalisations' element={<Realisations/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
            </Routes>
            <Footer user={user}/>
        </div>
    );
}

export default App;
