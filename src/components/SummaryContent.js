import React from "react";
import { Row, Col, OverlayTrigger, Button, Popover } from 'react-bootstrap';
import { FcOvertime, FcCommandLine, FcBusiness, FcApproval, FcBullish } from "react-icons/fc";

const data = [
	{
		number: 11,
		description: 'years as a Software Engineer',
		iconClass: FcOvertime
	},
	{
		number: 3,
		description: '-tier developer (Java, SQL & JS)',
		iconClass: FcCommandLine
	},
	{
		number: 6,
		description: 'key financial domain knowledge ',
		iconClass: FcBullish
	},
	{
		number: 4,
		description: 'certs: AWS SAA, SCJP, SCWD, Spring 3 Professional',
		iconClass: FcApproval
	},

]

const divStyle = {
	WebkitTransition: 'all', // note the capital 'W' here
	msTransition: 'all', // 'ms' is the only lowercase vendor prefix
	position: 'relative',
	padding: '75px',
	zIndex: 0,
	display: 'block'
};

const SummaryItemEntry = ({ number, description, iconClass }) => {
	const popover = (
		<Popover id="popover-basic" style={{ width: '150px' }}>
			<Popover.Title as="h3" style={{ textAlign: 'center' }}>
				{React.createElement(iconClass, { size: 42 })}
			</Popover.Title>
			<Popover.Content>
				{description}
			</Popover.Content>
		</Popover>
	);

	return (
		<OverlayTrigger show={true} placement="right" overlay={popover}>
			<Button variant="success" >{number}</Button>
		</OverlayTrigger>
	)
};


const SummaryContent = ({ props }) => {
	return (
		<>
			<Row>
				{data.map(fields =>
					<Col sm={12} lg={3} style={divStyle} >
						<SummaryItemEntry {...fields} />
					</Col>)}
			</Row>
		</>
	);
}

export default SummaryContent;
