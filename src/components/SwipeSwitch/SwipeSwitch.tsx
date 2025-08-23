import { createSignal, onMount } from 'solid-js';
import "./_style.css";

const SwipeSwitch = ({ text, icon, onSwipe }: { text: string; icon?: string; onSwipe?: () => void }) => {
	const [isDragging, setIsDragging] = createSignal(false);
	const [position, setPosition] = createSignal(0);
	let start, initial, parentWidth;

	const handleMouseDown = (e) => {
		setIsDragging(true);
		start = e.clientX;
		initial = position();
	};

	const handleMouseMove = (e) => {
		if (!isDragging()) return;
		/*console.log(`e.clientX: ${e.clientX}`);
		console.log(`start: ${start}`);
		console.log(`initial: ${initial}`); */
		const delta = e.clientX - start;
		//console.log(initial + delta);
		const newPos = initial + delta;
		setPosition(newPos);

		if (parentWidth && newPos >= parentWidth && onSwipe) {
			onSwipe();
			setIsDragging(false);
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	onMount(() => {
		parentWidth = document.querySelector('.swipe-switch')?.parentElement?.clientWidth || 0;
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	});

  return (
    <div class="swipe-switch" style={{width: `${position()}px`}}
			onMouseDown={handleMouseDown}>
      {text}
      {icon && <img draggable="false" src={icon} alt="Swipe Icon" />}
    </div>
  );
};

export default SwipeSwitch;
