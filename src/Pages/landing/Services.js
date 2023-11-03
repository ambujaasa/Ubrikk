import React from 'react';
import './Services.css';

export const Services = () => {
	return (
		<div className='body'>
			<h1 className='header'>SERVICES</h1>
			<div className='service'>
				<div className='body-content'>
					<p className='para'>
						The service page in an ecommerce website typically contains information about the
						services offered by the website.
					</p>
					<ol className='order-list'>
						<li>Shipping and delivery information</li>

						<li>Return and refund policy</li>

						<li>Customer support</li>

						<li>Privacy policy:</li>

						<li>Terms and conditions</li>

						<li>FAQs:</li>

						<li>Blog: </li>
					</ol>
				</div>
				<img
					src='https://cdn.vectorstock.com/i/preview-1x/50/81/girl-sitting-on-pile-books-vector-32735081.jpg'
					alt='img'
					width='550px'
					height='550px'
					className='service-img'></img>
			</div>
		</div>
	);
};
