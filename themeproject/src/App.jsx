import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('gu');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'gu';
    setLanguage(savedLanguage);
    const savedTheme = sessionStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme; 
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    sessionStorage.setItem('theme', newTheme);
    document.body.className = newTheme; 
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div>
      <div className='outer'>
      <Row className="mb-4">
          <Col>
            <h1 style={{"fontSize":"35px"}}>{language === 'gu' ? 'સ્વાગત છે અમારા પ્રોડક્ટ પેજ પર ' : 'Welcome to Our Product Page'}</h1>
          </Col>
          <Col className="text-end">
            <Button onClick={toggleTheme} className="me-2 btn-clr">
              {theme === 'light' ? 'Light Theme' : 'Dark Theme'}
            </Button>
            <Button  className='btn-clr' onClick={() => changeLanguage('es')}>
              English
            </Button>
            <Button  onClick={() => changeLanguage('gu')} className="me-2 btn-clr">
              ગુજરાતી
            </Button>
            
          </Col>
        </Row>
        </div>
      <Container className="main py-5">
        
        <Row className="product-list">
          <Col>
            <Card className="product-card mb-3">
              <Card.Img variant="top" src="https://i.pinimg.com/564x/d0/af/29/d0af294f46bab799b353e47b26f5bef1.jpg" style={{"width":"255px","height":"255px"}}/>
              <Card.Body>
                <Card.Title>{language === 'gu' ? 'બ્રશ સેટ ' : 'Brush Set'}</Card.Title>
                
                <Button className='btn-clrp'>{language === 'gu' ? 'ખરીદો' : 'Buy Now'}</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="product-card mb-3">
              <Card.Img variant="top" src="https://i.pinimg.com/736x/7e/d3/12/7ed31290070d27bfc2cf8b548d62ab1f.jpg" style={{"width":"255px", "height" :"255px"}} />
              <Card.Body>
                <Card.Title>{language === 'gu' ? 'લીપ ગ્લોઝ ' : 'Lip Gloss'}</Card.Title>
                
                <Button className='btn-clrp' >{language === 'gu' ? 'ખરીદો' : 'Buy Now'}</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="product-card mb-3">
              <Card.Img variant="top" src="https://i.pinimg.com/564x/ac/4e/bd/ac4ebdc1f81f7129a8da9ebfef93684a.jpg" style={{"width":"255px","height":"255px"}} />
              <Card.Body>
                <Card.Title>{language === 'gu' ? 'આઈ શેડો' : 'Eye Shadow'}</Card.Title>

                <Button className='btn-clrp'>{language === 'gu' ? 'ખરીદો' : 'Buy Now'}</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
