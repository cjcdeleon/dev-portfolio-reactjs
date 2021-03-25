import { Navbar, Nav } from 'react-bootstrap';

const Navigation = ({navSections}) => {
	return (
	<>
		<Navbar bg="dark" variant="dark" expand="lg">
			<Navbar.Brand href="#about">(._.)</Navbar.Brand>
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
