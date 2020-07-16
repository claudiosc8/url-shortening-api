import React, {useState} from 'react';
import {Row, Container, Col, Button, Navbar, Nav} from 'react-bootstrap/'
import './App.scss';
import Illustration from './images/illustration-working.svg'
import Logo from './images/logo.svg'
import IconBrandRecognition from './images/icon-brand-recognition.svg'
import IconDetailedRecords from './images/icon-detailed-records.svg'
import IconFullyCustomizable from './images/icon-fully-customizable.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare , faPinterest, faInstagram} from '@fortawesome/free-brands-svg-icons'
import Item from './Item'
import Form from './Form'
import axios from 'axios';

function App() {
 	
	const [result, setResult] = useState([])

	async function addLink(url) {

		 try {
		    const response = await axios.post('https://rel.ink/api/links/', {url});
		    setResult(res => [...res, response.data])
		 } catch (error) {
		    console.error(error);
		 }
	}


  	return (
     
     <React.Fragment>
      <Container>
	     <Navbar expand="md">
		  <div className='navbar-brand'><img src={Logo} alt='logo' /></div>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">
		      <div className='nav-link'>Features</div>
		      <div className='nav-link'>Pricing</div>
		      <div className='nav-link'>Resources</div>
		    </Nav>
		    <Nav className='user-area'>
		      <div className='nav-link'>Login</div>
		      <div className='nav-link'><Button variant="primary">Sign up</Button></div>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
	 </Container>
     <section className='hero'>
	     <Container>
		  <Row>
		    <Col md={7} className='hero-content'>
		    	<h1>More than just shorter links</h1>
		    	<div className='description'>Build your brand's recognition and get detailed insight on how your links are performing.</div>
		    	<Button variant="primary">Get Started</Button>
		    </Col>
		    <Col md={5} className='illustration'><img src={Illustration} alt='Illustration Working' /></Col>
		  </Row>
		</Container>
	</section>
	<section className="half gray-bg">
		<Container>
		  <Row>
		  	<Col>
		  		<Form addLink={addLink} />
		    </Col>
		  </Row>
		</Container>
	</section>
	<section className="gray-bg">
		<Container>
			<Row className='links-wrapper'>
			  	<Col>
			  		{result.map((res,i) => <Item key={i} data={res}/>)}
			 	</Col> 
			</Row>
			<Row className='section-title'>
			  	<Col>
				  	<h2>Advanced Statistics</h2>
			    	<div className='description'>Track how your links are performing across the web with our advanced statistics dashoboard.</div>
			 	</Col> 
		  	</Row>
		  	<Row className='section-content stagger'>
			  	<Col md={4} className='highlight-wrapper'>
			  		<div className='highlight'>
			  			<div className='icon'>
				  			<img src={IconBrandRecognition} alt='Brand recognition' />
				  		</div>
					  	<div className='title'>Brand Recognition</div>
				    	<div className='copy'>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</div>
			    	</div>
			 	</Col> 
			 	<Col md={4} className='highlight-wrapper'>
			  		<div className='highlight'>
			  			<div className='icon'>
				  			<img src={IconDetailedRecords} alt='Detailed Records' />
				  		</div>
					  	<div className='title'>Detailed Records</div>
				    	<div className='copy'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</div>
			    	</div>
			 	</Col> 
			 	<Col md={4} className='highlight-wrapper'>
			  		<div className='highlight'>
			  			<div className='icon'>
				  			<img src={IconFullyCustomizable} alt='Brand recognition' />
				  		</div>
					  	<div className='title'>Fully Customizable</div>
				    	<div className='copy'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</div>
			    	</div>
			 	</Col> 
		  	</Row>
		</Container>
	</section>
	<section className="pattern-bg">
		<Container>
			<Row className='section-title white'>
			  	<Col>
				  	<h2>Boost your links today</h2>
			    	<Button variant="primary">Get Started</Button>
			 	</Col> 
		  	</Row>
	  	</Container>
  	</section>
  	<footer>
  		<Container>
			<Row>
			  	<Col md={4} className="logo">
				  	<img src={Logo} alt='logo' />
			 	</Col> 
			 	<Col md={2}>
			 		<h6>Features</h6>
			 		  <ul className="list-unstyled">
	  					  <li className='footer-link'>Link Shortening</li>
	  					  <li className='footer-link'>Branded Links</li>
	  					  <li className='footer-link'>Analytics</li>
  					  </ul>
			 	</Col>
			 	<Col md={2}>
			 		<h6>Resources</h6>
			 		  <ul className="list-unstyled">
	  					  <li className='footer-link'>Blog</li>
	  					  <li className='footer-link'>Developers</li>
	  					  <li className='footer-link'>Support</li>
  					  </ul>
			 	</Col>
			 	<Col md={2}>
			 		<h6>Company</h6>
			 		  <ul className="list-unstyled">
	  					  <li className='footer-link'>About</li>
	  					  <li className='footer-link'>Our Team</li>
	  					  <li className='footer-link'>Careers</li>
	  					  <li className='footer-link'>Contact</li>
  					  </ul>
			 	</Col>
			 	<Col  md={2} className='social'>
			 		<FontAwesomeIcon icon={faFacebookSquare} size="1x"/>
			 		<FontAwesomeIcon icon={faTwitter} />
			 		<FontAwesomeIcon icon={faPinterest} />
			 		<FontAwesomeIcon icon={faInstagram} />
			 	</Col>
		  	</Row>
	  	</Container>
  	</footer>

    </React.Fragment>
  );

}

export default App;
