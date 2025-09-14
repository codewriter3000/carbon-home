import './_styles.css';

const Button = ({ kind, text, onClick }) => {
	return <div class={kind} onClick={onClick}>{text}</div>
};

export default Button;
