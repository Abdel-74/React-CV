import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Card from './CardFooter';

function Footer ({user}) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer>
            <div className="footer">
                <div className="row">
                    <div className="col-md-3">
                        <h5>John Doe</h5>
                        <p>Adresse: 11 Rue de Chanaleilles, 75007 Paris</p>
                        <p>Téléphone: +33 1 23 45 67 89</p>
                        <div style={{ fontSize: '30px' }}>
                            <a href={`${user.html_url}`} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} style={{ color: '#444', marginRight: '10px' }}/>
                            </a>
                            <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faXTwitter} style={{ color: '#444', marginRight: '10px' }}/>
                            </a>
                            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} style={{ color: '#444', marginRight: '10px' }}/>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <h5>Liens utiles</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-decoration-none text-dark">Accueil</Link></li>
                            <li><Link to="/contact" className="text-decoration-none text-dark">Contact</Link></li>
                            <li><Link to="/services" className="text-decoration-none text-dark">Services</Link></li>
                            <li><Link to="/mentionslégales" className="text-decoration-none text-dark">Mentions légales</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h5>Dernière réalisation</h5>
                        <Link className='text-decoration-none' to={`/réalisations#3`}>
                            <Card 
                                title="Projet 3"
                                image="/images/portfolio/espace-bien-etre.jpg"
                            />
                        </Link>
                    </div>

                    <div className="col-md-3">
                        <h5>Dernier article de blog</h5>
                        <ul>
                            <Link className='text-decoration-none' to={`/blog#6`}>
                                <Card 
                                    title="Article 6"
                                    image="/images/blog/technos.png"
                                />
                            </Link>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <p>&copy; 2024 John Doe. Tous droits réservés.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center">
                        <button className="btn btn-secondary btn-back-to-top" onClick={scrollToTop}>Remonter en haut</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
