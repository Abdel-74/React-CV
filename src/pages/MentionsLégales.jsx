const LegalNotice = () => {
    return (
        <div className="accordion" id="accordionMl">
            <meta name="robots" content="noindex" />
            <h1 className="text-center mb-4">Mentions Légales</h1>
            
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Éditeur du site
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionMl">
                    <div className="accordion-body">
                        <p>L'éditeur du site est John Doe.</p>
                        <p><strong>Adresse :</strong> 11 Rue de Chanaleilles, 75007 Paris, France</p>
                        <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                        <p><strong>E-mail :</strong> john@doe.com</p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Hébergeur du site
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionMl">
                    <div className="accordion-body">
                        <p>CodeSandbox</p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Crédits
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionMl">
                    <div className="accordion-body">
                        <p>Les images utilisées sur ce site sont fournies par Pixabay.</p>
                        <p>Visitez <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a> pour plus d'informations.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalNotice;
