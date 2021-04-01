import { Figure, FigureImage  } from 'react-bootstrap';

const Section = ({sectionName, children}) => {
	return (
	<>
		<a name={sectionName}/>
		<div className="callout callout-info" targ>
			<h1>{sectionName}</h1>
		</div>
		{/* placeholder content to be replaced by children component */}
		<Figure>
			<Figure.Image width={500}
				height={500}
			/>
		</Figure>

	</>
	);
}

export default Section;
