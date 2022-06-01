//import { ReactComponent as Logo } from 'C:/Users/ssithus/crud/src/logo.svg';

import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
        <NavLink to='/profile' activeStyle>
		<img
            src="https://cdn.icon-icons.com/icons2/1834/PNG/128/iconfindermercedeslogo4140438-115958_115923.png"
            alt="Logo"
			width={50}
			height={50}
            className="img-thumbnail"
          />
		</NavLink>
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/defender' activeStyle>
			Defender
		</NavLink>
        <NavLink to='/blackduck' activeStyle>
			Blackduck
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink exact={true} to='/'>Logout</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
