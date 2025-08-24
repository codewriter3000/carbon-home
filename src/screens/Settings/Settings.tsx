import { createSignal } from 'solid-js';
import { StackRouterProvider, useStackRouter } from '../../hooks/StackRouter.tsx';

const SettingsNavButton = ({name, screen}) => {
	const { push, pop } = useStackRouter();

	return (
		<div onClick={() => push(screen)} style="background-color: #262626; border-radius: 20px; margin: 10px; height: 50px; font-size: 20px; align-content: center;">
			{name}
		</div>
	)
};

const Settings = () => {
	const { push, pop } = useStackRouter();

	return (
		<div>
			<div style="text-decoration: underline; color: white;" onClick={() => pop()}>Back</div>
			<h1>Settings</h1>
			<SettingsNavButton name="System and Security" screen={<SystemAndSecurity />} />
			<SettingsNavButton name="Network and Internet" />
			<SettingsNavButton name="Hardware and Sound" />
			<SettingsNavButton name="Programs" />
			<SettingsNavButton name="User Accounts and Family Safety" />
			<SettingsNavButton name="Appearance and Personalization" />
			<SettingsNavButton name="Clock, Language, and Region" />
			<SettingsNavButton name="Ease of Access" />
		</div>
	)
};

const SystemAndSecurity = () => {
	return (
		<div>
			<h1>System and Security</h1>
			<SettingsNavButton name="Action Center" screen={<ActionCenter />} />
			<SettingsNavButton name="Carbon Firewall" />
			<SettingsNavButton name="System" />
			<SettingsNavButton name="Software Update" />
			<SettingsNavButton name="Power Options" />
			<SettingsNavButton name="Backup and Restore" />
			<SettingsNavButton name="Drive Encryption" />
			<SettingsNavButton name="Administrative Tools" />
		</div>
	)
}

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

export const ActionCenter = () => {
	return (
		<div>
			<h1>Action Center</h1>
			<h2>Security</h2>
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); row-gap: 20px;">
				<Label property="Carbon Firewall" value="Enabled" />
				<Label property="Software Updates" value="Automatic" />
				<Label property="Internet Security" value="Enabled" />
				<Label property="ClamAV" triggerRed value="Not installed" />
				<Label property="Rkhunter" triggerRed value="Not installed" />
			</div>
			<h2>Maintenance</h2>
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); row-gap: 20px;">
				<Label property="Last Backup" value="3/5/24" triggerRed />
			</div>
		</div>
	)
}

export default Settings;
