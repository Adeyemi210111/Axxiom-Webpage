import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
    
	<Nav>
    <div
        style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
			color: 'white',
			width: '10%',
        }}
    > Axxiom Properties</div>
		<Bars />

		<NavMenu>
        <NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
        <NavLink to='/contact' activeStyle>
			Contact
		</NavLink>
        <NavLink to='/buy' activeStyle>
			Buy
		</NavLink><NavLink to='/rent' activeStyle>
			Rent
		</NavLink>
        <NavLink to='/shortlets' activeStyle>
			Shortlets
		</NavLink>
        
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
	</Nav>

	</>
);
};

export default Navbar;
