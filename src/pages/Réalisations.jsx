import { Card, Button } from 'react-bootstrap';

const Realisations = () => {
    
    const projects = [
        {
            id: '1',
            title: 'Projet 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed massa porta, malesuada leo non, gravida libero.',
            imageUrl: '/images/portfolio/fresh-food.jpg',
        },
        {
            id: '2',
            title: 'Projet 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed massa porta, malesuada leo non, gravida libero.',
            imageUrl: '/images/portfolio/restaurant-japonais.jpg',
        },
        {
            id: '3',
            title: 'Projet 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed massa porta, malesuada leo non, gravida libero.',
            imageUrl: '/images/portfolio/espace-bien-etre.jpg',
        },
    ];
      
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Mes réalisations</h1>
            <div className="row">
                {projects.map((project, index) => (
                <div className="col-md-4 mb-4" key={index}>
                    <Card id={project.id}>
                    <Card.Img variant="top" src={project.imageUrl} />
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <Button variant="primary">Voir le projet</Button>
                    </Card.Body>
                    </Card>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Realisations;