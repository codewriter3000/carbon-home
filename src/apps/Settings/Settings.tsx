import { createSignal } from 'solid-js';
import { StackRouterProvider, useStackRouter } from '../../hooks/StackRouter.tsx';
import Label from '../../components/Label/Label.tsx';
import SettingsNavButton from './SettingsNavButton.tsx';
import Button from '../../components/Button/Button.tsx';

const Settings = () => {
	const { push, pop } = useStackRouter();

	return (
		<div>
			<Button kind="link" text="Back" onClick={() => {
				pop();
			}} />
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
