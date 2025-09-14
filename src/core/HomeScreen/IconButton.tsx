import './_styles.css';

const IconButton = ({ icon, name }) => {
	return (
				<div class="icon-button">
					<img style="width: 32px;" src={icon} />
					<span style="line-height: normal;">{name}</span>
				</div>
			);
};

export default IconButton;
