import { useState, useRef } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const formRef = useRef(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        formRef.current.reset();

        setShowSuccessMessage(true);

        setTimeout(() => {
        setShowSuccessMessage(false);
        }, 2500);
    };

    const defaultProps = {
        center: {
          lat: 48.85310551999703, 
          lng: 2.3182913880748695
        },
        zoom: 11
    };

    
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Contact</h1>
    
            <div className="row">
                <div className="col-md-6">
                    <h2>Formulaire de Contact</h2>
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nom</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Numéro de téléphone</label>
                            <input type="tel" className="form-control" id="phone" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Sujet</label>
                            <input type="text" className="form-control" id="subject" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Envoyer</button>
                    </form>

                    {showSuccessMessage && (
                        <div className="alert alert-success mt-3" role="alert">
                            Message envoyé avec succès !
                        </div>
                    )}
                </div>

                <div className="col-md-6">
                    <h2>Coordonnées</h2>
                    <p><strong>Adresse:</strong> 11 Rue de Chanaleilles, 75007 Paris, France</p>
                    <p><strong>Téléphone:</strong> +33 1 23 45 67 89</p>
                    <div className="map">
                        <h2>Google Map</h2>

                        <div style={{ height: '70vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyAwm0a3tFSq7et4CK0r-Q35JNrJAnNghDE" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <AnyReactComponent
                                    lat={48.85310551999703}
                                    lng={2.3182913880748695}
                                    text="My Marker"
                                />
                            </GoogleMapReact>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    );
};
    
export default Contact;