import React, {useState} from 'react';
import {Row, Container, Col, Button, Navbar, Nav, FormControl, Form} from 'react-bootstrap/'
import './App.scss';
import Illustration from './images/illustration-working.svg'
import Logo from './images/logo.svg'
import IconBrandRecognition from './images/icon-brand-recognition.svg'
import IconDetailedRecords from './images/icon-detailed-records.svg'
import IconFullyCustomizable from './images/icon-fully-customizable.svg'

function App() {

 
  return (
     
     <React.Fragment>
      <Container>
	     <Navbar expand="md">
		  <Navbar.Brand href="#home"><img src={Logo} alt='logo' /></Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">
		      <Nav.Link href="#home">Features</Nav.Link>
		      <Nav.Link href="#link">Pricing</Nav.Link>
		      <Nav.Link href="#link">Resources</Nav.Link>
		    </Nav>
		    <Nav>
		      <Nav.Link href="#home">Login</Nav.Link>
		      <Nav.Link href="#link"><Button variant="primary">Sign up</Button></Nav.Link>
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
		    <Col md={5}><img src={Illustration} alt='Illustration Working' /></Col>
		  </Row>
		</Container>
	</section>
	<section className="half gray-bg">
		<Container>
		  <Row>
		  	<Col>
		  	<Form inline className='shorten-form'>
		      <FormControl type="text" placeholder="Shorten a link here..." className="mr-sm-4 flex-grow-1" />
		      <Button variant="primary" className="round">Shorten It!</Button>
		    </Form>
		    </Col>
		  </Row>
		</Container>
	</section>
	<section className="gray-bg">
		<Container>
			<Row className='links-wrapper'>
			  	<Col>
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

    </React.Fragment>
  );

}

export default App;
