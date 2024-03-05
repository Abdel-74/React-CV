import { Link } from 'react-router-dom';
import {useState} from 'react';


const Header = () => {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activePage, setActivePage] = useState('Accueil'); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSetActivePage = (pageName) => {
        setActivePage(pageName);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light color-navbar">
                
                <Link className="navbar-brand" to="/">Mon Portfolio</Link>
                
                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item ${activePage === 'Accueil' ? 'active' : ''}`} onClick={() => handleSetActivePage('Accueil')}>
                            <Link className="nav-link text-uppercase" to="/">Accueil</Link>
                        </li>
                        <li className={`nav-item ${activePage === 'Contact' ? 'active' : ''}`} onClick={() => handleSetActivePage('Contact')}>
                            <Link className="nav-link text-uppercase" to="/contact">Contact</Link>
                        </li>
                        <li className={`nav-item ${activePage === 'Services' ? 'active' : ''}`} onClick={() => handleSetActivePage('Services')}>
                            <Link className="nav-link text-uppercase" to="/services">Serices</Link>
                        </li>
                        <li className={`nav-item ${activePage === 'Réalisations' ? 'active' : ''}`} onClick={() => handleSetActivePage('Réalisations')}>
                            <Link className="nav-link text-uppercase" to="/réalisations">Réalisations</Link>
                        </li>
                        <li className={`nav-item ${activePage === 'Blog' ? 'active' : ''}`} onClick={() => handleSetActivePage('Blog')}>
                            <Link className="nav-link text-uppercase" to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
        
            </nav>
        </header>
    );
  };

  export default Header;