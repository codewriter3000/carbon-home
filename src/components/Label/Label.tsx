const Label = ({ property, value, triggerRed }) => {
	return (
		<div style="display: flex; flex-direction: column;">
			<div style="color: #8d8d8d;">
				{property}
			</div>
			<div style={`color: ${triggerRed ? "#fa4d56" : "inherit"};`}>
				{value}
			</div>
		</div>
	)
}

export default Label;
