import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay, faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faBullseye, faHeart } from '@fortawesome/free-solid-svg-icons';

// Import images
import iphoneImage from './images/iphone6.png';
import dogImage from './images/dog-img.jpg';
import ladyImage from './images/lady-img.jpg';

function HomePage() {
  return (
    <div>
      <section className="colored-section" id="title">
        <div className="container-fluid">
          {/* Nav Bar */}
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">tindog</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ml-2">
                  <a className="nav-link" href="#footer">Contact</a>
                </li>
                <li className="nav-item ml-2">
                  <a className="nav-link" href="#pricing">Pricing</a>
                </li>
                <li className="nav-item ml-2">
                  <a className="nav-link" href="#cta">Download</a>
                </li>
              </ul>
            </div>
          </nav>
          {/* Title */}
          <div className="row">
            <div className="col-lg-6">
              <h1 className="big-heading">Meet new and interesting dogs nearby.</h1>
              <button type="button" className="btn btn-dark btn-lg download-button">
                <FontAwesomeIcon icon={faApple} /> Download
              </button>
              <button type="button" className="btn btn-outline-light btn-lg download-button">
                <FontAwesomeIcon icon={faGooglePlay} /> Download
              </button>
            </div>
            <div className="col">
              <img className="ii" src={iphoneImage} alt="iphone-mockup" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="white-section" id="features">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 feature-box">
              <FontAwesomeIcon icon={faCheckCircle} className="icon fa-4x" />
              <h3 className="feature-title">Easy to use.</h3>
              <p style={{ color: '#8f8f8f' }}>So easy to use, even your dog could do it.</p>
            </div>
            <div className="col-lg-4 feature-box">
              <FontAwesomeIcon icon={faBullseye} className="icon fa-4x" />
              <h3 className="feature-title">Elite Clientele</h3>
              <p style={{ color: '#8f8f8f' }}>We have all the dogs, the greatest dogs.</p>
            </div>
            <div className="col-lg-4 feature-box">
              <FontAwesomeIcon icon={faHeart} className="icon fa-4x" />
              <h3 className="feature-title">Guaranteed to work.</h3>
              <p style={{ color: '#8f8f8f' }}>Find the love of your dog's life or your money back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      
      <section className="colored-section" id="testimonials">
        <div id="testimonial-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active container-fluid">
              <h2 className="testimonial-text">I no longer have to sniff other dogs for love. I've found the hottest
                Corgi on TinDog. Woof.</h2>
              <img className="testimonial-image press-logo" src={dogImage} alt="dog-profile" />
              <em>Pebbles, New York</em>
            </div>
            <div className="carousel-item container-fluid">
              <h2 className="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of
                their life. I think.</h2>
              <img className="testimonial-image press-logo" src={ladyImage} alt="lady-profile" />
              <em>Beverly, Illinois</em>
            </div>
          </div>
          <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
