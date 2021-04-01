import { Navbar, Nav } from 'react-bootstrap';

const Navigation = ({navSections}) => {
	return (
	<>
		<Navbar bg="dark" variant="dark" expand="lg">
			{/* http://www.pinyin.info/tools/converter/chars2uninumbers.html */}
			<Navbar.Brand href="#about">&#30496;&#12356;&#38957; </Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					{navSections.map(value => (
					<Nav.Link href={`#${value}`}>{value}</Nav.Link>
					))
					}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</>
	);
}

export default Navigation;
