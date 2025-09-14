import { StackRouterProvider, useStackRouter } from '../../hooks/StackRouter.tsx';
import './_styles.css';

const SettingsNavButton = ({name, screen}) => {
	const { push, pop } = useStackRouter();

	return (
		<div class="btn" onClick={() => push(screen)}>
			{name}
		</div>
	)
};

export default SettingsNavButton;
