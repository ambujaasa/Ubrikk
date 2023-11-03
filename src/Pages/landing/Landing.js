import React from 'react';
import Header from './Header';
import './Landing.css';

import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

import bgimage from '../../assets/img/bg.jpg';
import bag from '../../bag.svg';
import nameplate from '../../nameplate.svg';
import label from '../../label.svg';
import car from '../../assets/img/car.png';
import { Link } from 'react-router-dom';

function Landing() {
	return (
		<div
			style={{
				backgroundImage: `url(${bgimage})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				width: '100%',
				height: '100vh',
				minHeight: '900px',
			}}>
			<Header />
			<div className='landing-body'>
				<div className='landing-content'>
					<p>CUSTOM ORDERS JUST FOR YOU</p>
					<h2>
						Pick a product and have it delivered <br />
						according to your <span>specifications</span>{' '}
					</h2>
				</div>
				<div className='three-lables'>
					<a className='links'>
						<div>
							<img src={bag} alt='error' />
							<p>Kid's Bags</p>
						</div>
					</a>
					<a href='/landingpage' className='links'>
						<div>
							<img src={nameplate} alt='error' />
							<p>Nameplates</p>
						</div>
					</a>
					<a className='links'>
						<div>
							<img src={label} alt='error' />
							<p>Labels</p>
						</div>
					</a>
					<a href='/customizecar' className='links'>
						<div>
							<img src={car} alt='error' />
							<p>Cars</p>
						</div>
					</a>
				</div>

				<div className='footer'>
					<div>
						<h3>Products</h3>
						<p>Kids Bag</p>
						<p>Plastic cars</p>
						<p>Labels</p>
						<p>Nameplates</p>
					</div>
					<div>
						<h3>Follow Us</h3>
						<BsFacebook className='icon' />
						<AiFillTwitterCircle className='icon' />
						<AiFillInstagram className='icon' />
					</div>

					<div>
						<h3>Call Us</h3>
						<p>Phone Number:123-456-789</p>
						<p>Email:ubrikk@gmail.com</p>
						<p>Bangalore</p>
					</div>
				</div>
				<div>
					<p className='row'>
						&copy;{new Date().getFullYear()} ubrikk|All right reserved|Terms of services|privacy
					</p>
				</div>
			</div>
		</div>
	);
}

export default Landing;
