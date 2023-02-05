import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const Home = () => {
  const [cookies, setCookie] = useCookies(['hike_user']);
  const [isLoggedIn, setIsLoggedIn] = useState(cookies.user ? true : false);
  const publications = [
    {
      id: 1,
      title: "Voyage à Bali",
      content: "J'ai passé un superbe séjour à Bali, les plages étaient magnifiques et la nourriture délicieuse !",
      author: "John Doe",
      image: "https://deih43ym53wif.cloudfront.net/bali-indonesia-shutterstock_459773704_0dd494ecf7.jpeg"
    },
    {
      id: 2,
      title: "Randonnée en Patagonie",
      content: "La randonnée dans les montagnes de la Patagonie était l'une des expériences les plus incroyables de ma vie !",
      author: "Jane Smith",
      image: "https://deih43ym53wif.cloudfront.net/bali-indonesia-shutterstock_459773704_0dd494ecf7.jpeg"
    },
    {
      id: 3,
      title: "Croisière en Méditerranée",
      content: "La croisière en Méditerranée avec ma famille a été inoubliable, j'ai visité de magnifiques villes et rencontré des gens formidables !",
      author: "Bob Johnson",
      image: "https://deih43ym53wif.cloudfront.net/bali-indonesia-shutterstock_459773704_0dd494ecf7.jpeg"
    },
  ];

  const handleLogout = () => {
    setCookie('hike_user', '', { path: '/' });
    setIsLoggedIn(false);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Voyages</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Destinations populaires</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Conseils de voyage</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">A propos</a>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <a className="nav-link" href="/">{cookies.user}</a>
              </li>
            ) : null}
            {isLoggedIn ? (
              <li className="nav-item">
                <a className="nav-link" onClick={handleLogout} href="/">Déconnexion</a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/">Connexion</a>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <div className="container">
        <h1 className="text-center my-5">Publications de voyage</h1>
        <div className="row">
          {publications.map(p => (
            <div key={p.id} className="col-md-4 my-3">
              <div className="card">
                <img src={p.image} className="card-img-top" alt={p.title} />
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.content}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Posté par {p.author}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

  