import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Landing.css';
import { getUser, LogoutUser } from 'redux/features/auth';
import { Fragment } from 'react';

function Header() {
	const user = useSelector(getUser);
	const dispatch = useDispatch();

	const logout = () => dispatch(LogoutUser());

	return (
		<div className='navbar-div'>
			<div className='logo'>
				<h4>Ubrikk</h4>
			</div>

			<div className='nav' style={{ justifyContent: 'center' }}>
				<nav>
					<Link to='/aboutus'>About Us</Link>
					<Link to='/products'>Products</Link>
					<Link to='services'>Services</Link>
					<Link to='vendors'>Vendors</Link>
				</nav>
			</div>

			<div className='auth-btn'>
				{user ? (
					<Fragment>
						<button>{user.profile.full_name}</button>
						<button className='signup-btn' onClick={logout}>
							Logout
						</button>
					</Fragment>
				) : (
					<Fragment>
						<button>
							<Link to='/signin'>Login</Link>
						</button>
						<button className='signup-btn'>
							<Link to='/signup'>Signup</Link>
						</button>
					</Fragment>
				)}
			</div>
		</div>
	);
}

export default Header;
