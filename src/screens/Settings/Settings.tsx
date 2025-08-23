const SettingsNavButton = ({name}) => {
	return (
		<div style="background-color: #262626; border-radius: 20px; margin: 10px; height: 50px; font-size: 20px; align-content: center;">
			{name}
		</div>
	)
};
const Settings = () => {
	return (
		<div>
			<h1>Settings</h1>
			<SettingsNavButton name="System and Security" />
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

export default Settings;
