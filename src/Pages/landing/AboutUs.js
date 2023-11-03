import React from 'react';
import './AboutUs.css';

export const AboutUs = () => {
	return (
		<div>
			<div className=''>
				<h1 className='h'>ABOUTUS</h1>
			</div>

			<div className=''>
				<h2 className='h2'>UBRIKK PLATFORM</h2>

				<p className='p-1'>
					A next generation platform that connect vendor with cumstomers.<br></br> Here the products
					are goods are designed online and delivered at customer specs.<br></br> Our unique
					algorithem is delivered such that a user can design his perfective goods online with
					WYSIWYG interface.<br></br>This also enables the vendor manufacture the custom product as
					per client specs.<br></br>Hence one part of this platform is user is buyers, while the
					other is vendors.<br></br>We have to built the core MVP.Our current focus is to integrate
					first vendor type to our application.
				</p>

				<h3 className='h2'>SOCIO ECONOMIC IMPACT OF THE UBRIKK</h3>
				<p className='p-1'>
					<ol>
						<li>
							Enhances local manufacture and vendors to deliver custom goods as service and hence
							improve life
						</li>
						<li>
							Create 10x additinal workforce in each villages and cities across india,starting from
							bangalore as first hub
						</li>
						<li>
							Availability of easy custom made goods enable 20% reduction in the buy and throw
							culture, thus carbon footprint
						</li>
						<li>
							Attract more reluctant customers to online sector ,which further improves the tax
							generation for the governments.
						</li>
						<li>Market disruption in high end goods manufactures and distributors</li>
					</ol>
				</p>
			</div>
		</div>
	);
};
