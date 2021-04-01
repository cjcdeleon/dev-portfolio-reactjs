import { Figure } from 'react-bootstrap';

const Section = ({ sectionName, children }) => {
	return (
		<>
			<a name={sectionName} />
			<div className="callout callout-info">
				<h1>{sectionName}</h1>
			</div>
			{/* placeholder content to be replaced by children component
			https://reactjs.org/docs/conditional-rendering.html 
		*/}
			{children}
			{!children &&
				<Figure className="text-center">
					<Figure.Caption>
						TODO: placeholder content
			</Figure.Caption>
					<Figure.Image width={500}
						height={500}
					/>
				</Figure>
			}
		</>
	);
}

export default Section;
