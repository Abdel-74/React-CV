import { Button } from 'react-bootstrap';

const Blog = () => {
    const articles = [
        {
            id: '1',
            title: 'Article 1',
            content: 'Contenu de l\'article 1...',
            image: '/images/blog/coder.jpg',
        },
        {
            id: '2',
            title: 'Article 2',
            content: 'Contenu de l\'article 2...',
            image: '/images/blog/croissance.jpg',
        },
        {
            id: '3',
            title: 'Article 3',
            content: 'Contenu de l\'article 3...',
            image: '/images/blog/google.jpg',
        },
        {
            id: '4',
            title: 'Article 4',
            content: 'Contenu de l\'article 4...',
            image: '/images/blog/screens.jpg',
        },
        {
            id: '5',
            title: 'Article 5',
            content: 'Contenu de l\'article 5...',
            image: '/images/blog/seo.jpg',
        },
        {
            id: '6',
            title: 'Article 6',
            content: 'Contenu de l\'article 6...',
            image: '/images/blog/technos.png',
        },
    ];

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Mon Blog</h1>
            <div className="row">
                {articles.map((article, index) => (
                    <div id={article.id} key={index} className="col-md-4 mb-4">
                        <div className="card h-100 shadow">
                            <img src={article.image} className="card-img-top" alt={article.title} />
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.content}</p>
                            </div>
                            <div className="card-footer">
                                <Button variant="primary">Lire la suite</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;