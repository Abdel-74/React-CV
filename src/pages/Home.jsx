function Home({user}){     
    
    return(
        <div>
            <div className="home-page">
                <div className="background-image">
                    <div className="overlay"></div>
                    <div className="content">
                        <h1>Bienvenue sur notre site</h1>
                        <h2>Découvrez nos services exceptionnels</h2>
                        <a href="#about">
                            <button className="btn-primary">En savoir plus</button>
                        </a>
                    </div>
                </div>            
            
            </div>
            <div id="about" className="about-section">
                <div className="about-content">
                    <div className="about-image">
                        <img src={user.avatar_url} alt="John Doe" />
                    </div>
                    <div className="about-info">
                        <h2>À propos de John Doe</h2>
                        <strong>{user.bio}</strong>

                        <h3>Compétences</h3>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '90%' }}>HTML</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '80%' }}>CSS</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '70%' }}>JavaScript</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );

}

export default Home;