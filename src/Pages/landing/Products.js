import React, { useState } from 'react';
import './Products.css';

export const Products = () => {
	const [images, setImages] = useState({
		img1: 'https://th.bing.com/th?id=OPA.eemrg%2bBnPNb8Wg474C474&o=5&pid=21.1&w=160&h=220',
		img2: 'https://th.bing.com/th/id/OIP.aWQBJUMgnBA5jUHdlE4SLAHaHa?pid=ImgDet&w=188&h=188&c=7',
		img3: 'https://th.bing.com/th/id/OIP.gCsGVEJJl1YyWfvv-rsTqAHaDq?w=313&h=180&c=7&r=0&o=5&pid=1.7',
		img4: 'https://th.bing.com/th/id/OIP.1WG-hJWQEqynAUX7UdNSjwHaHa?pid=ImgDet&rs=1',
		img5: 'https://media.istockphoto.com/id/1446515732/photo/blank-white-label-mockup.jpg?s=1024x1024&w=is&k=20&c=MSCklzl4KAj2tqO-FidKSzOzVJ8uQxIR0a2N0BJq3u8=',
		img6: 'https://th.bing.com/th/id/R.07e0a7a9ea26ff9eea5be3dae5049659?rik=F%2fKjHTVPYoIVzg&riu=http%3a%2f%2fimages.esellerpro.com%2f2149%2fI%2f742%2f460%2f2%2fLittle-Tikes-Cozy-Coupe-2.jpg&ehk=fzXDtSisvUtwHFPK%2biPoRoudWlxXlZ3Wmw6J2MfsqxE%3d&risl=&pid=ImgRaw&r=0',
		img7: 'https://th.bing.com/th/id/OIP.5Zq3MnkDWU_lR1YBiqA8gwHaHa?pid=ImgDet&rs=1',
		img8: 'https://static.vecteezy.com/system/resources/previews/000/431/736/original/vector-labels.jpg',
		img9: 'https://i.etsystatic.com/9177505/r/il/e9fe10/1232247821/il_1588xN.1232247821_ho4q.jpg',
		img10: 'https://th.bing.com/th/id/OIP.-vKu9AXD63sQ4SWjjPTa1AHaHa?pid=ImgDet&rs=1',
	});
	return (
		<div>
			<h1 className='h1'>PRODUCTS</h1>
			<div className='picture'>
				<div className='flex-one'>
					<img src={images.img1} alt='image1' className='img'></img>

					<div className='button'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img2} alt='' className='img'></img>
					<div className='button'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img3} alt='' className='img'></img>
					<div className='button'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img4} alt='' className='img'></img>
					<div className='button'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img5} alt='' className='img'></img>
					<div className='button'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img6} alt='' className='img'></img>
					<div className='button'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img7} alt='' className='img'></img>
					<div className='button'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img8} alt='' className='img'></img>
					<div className='button'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img9} alt='' className='img'></img>
					<div className='button'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img10} alt='' className='img'></img>
					<div className='button'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
