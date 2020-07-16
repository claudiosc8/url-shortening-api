import React, {useState, useRef} from 'react';
import {Button, FormControl, Form} from 'react-bootstrap/'


function FormShorten({addLink}) {
 
 	const inputRef = useRef(null);
 	const [error, setError] = useState(false)


 	const handleSubmit = (e) => {
 		e.preventDefault();

		var r = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
	
 		const data = inputRef.current.value;

 		if(r.test(data)) {
 			setError(false)
 			addLink(data)
 			inputRef.current.value = '';
 		} else {
 			setError(true)
 		}
 	}

	return (
	     
	     <Form inline className='shorten-form' onSubmit={handleSubmit}>
	    	<div className={`input-wrapper flex-grow-1 mr-md-4${error ? ' error' : ''}`}>
	      <FormControl ref={inputRef} type="text" placeholder="Shorten a link here..." className={`mr-sm-4${error ? ' error' : ''}`} />
	      {error && <div className='error-message'>Please add a link</div>}
	      </div>
	      <Button variant="primary" type="submit" className={`round`}>Shorten It!</Button>
	    </Form>
	  );

}

export default FormShorten;
