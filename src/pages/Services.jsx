import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faLaptopCode, faGlobe } from '@fortawesome/free-solid-svg-icons'; 

const Services = () => {
    return (
        <div className="services">
            <h1 className="display-4">Mes Services</h1>
            <div className="row">
                
                <div className="col-md-4">
                    <div className="card mx-2">
                        <img src="/images/services-bg.jpg" className="card-img-top" alt="Service 1" />
                        <div className="card-body">
                            <h5 className="card-title">
                                <FontAwesomeIcon icon={faPalette} className="service-icon" />
                                Design
                            </h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Suspendisse sed massa porta, malesuada leo non, gravida libero. 
                            Proin congue non mi ut facilisis. Aliquam interdum fringilla ex sed efficitur.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mx-2">
                        <img src="/images/services-bg.jpg" className="card-img-top" alt="Service 2" />
                        <div className="card-body">
                            <h5 className="card-title">
                                <FontAwesomeIcon icon={faLaptopCode} className="service-icon" />
                                Développement
                            </h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Suspendisse sed massa porta, malesuada leo non, gravida libero. Proin congue non mi ut facilisis. 
                            Aliquam interdum fringilla ex sed efficitur.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mx-2">
                        <img src="/images/services-bg.jpg" className="card-img-top" alt="Service 3" />
                        <div className="card-body">
                            <h5 className="card-title">
                                <FontAwesomeIcon icon={faGlobe} className="service-icon" />
                                Référencement
                            </h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Suspendisse sed massa porta, malesuada leo non, gravida libero. Proin congue non mi ut facilisis. 
                            Aliquam interdum fringilla ex sed efficitur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;