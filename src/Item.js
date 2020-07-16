import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap/'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import LinesEllipsis from 'react-lines-ellipsis'

function Item({data}) {
 	
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if(copied) {
			setTimeout(function(){ setCopied(false); }, 2000);
		}
	}, [copied])

	return (
	     
	     <div className='result'>
			<div className='original'>
			<LinesEllipsis
			  text={data.url}
			  maxLine='1'
			  ellipsis='...'
			  trimRight
			  basedOn='letters'
			/>
			</div>
			<div className='short-link'>{`https://rel.ink/${data.hashid}`}</div>
			<CopyToClipboard text={`https://rel.ink/${data.hashid}`} onCopy={() => setCopied(true)}>
				<Button variant="primary" className={`round${copied ? ' active' : ''}`}>{copied ? 'Copied' : 'Copy'}</Button>
			</CopyToClipboard>
		</div>
	  );

}

export default Item;
