import { Navbar, Nav, Button, Badge } from 'react-bootstrap';

const Navigation = ({navSections}) => {
	return (
	<>
		<Navbar bg="dark" variant="dark" expand="lg">
			{/* http://www.pinyin.info/tools/converter/chars2uninumbers.html */}
			<Navbar.Brand href="#about">
				<Button variant="primary">
  					&#12459;&#12523;&#12525;&#12473; <Badge variant="light">&#30496;&#12356;&#38957;</Badge>
  				</Button>
			</Navbar.Brand>
			{/*<Navbar.Brand href="#about">carlos jaime de leon</Navbar.Brand>*/}
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					{navSections.map(value => (
					<Nav.Link href={`#${value}`} key={value}>{value}</Nav.Link>
					))
					}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</>
	);
}

export default Navigation;
