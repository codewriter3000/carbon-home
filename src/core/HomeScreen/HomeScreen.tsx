import { For } from "solid-js";

import {
  filesIcon,
  booksIcon,
  calendarIcon,
  notesIcon,
  calculatorIcon,
  cameraIcon,
  smsIcon,
  weatherIcon,
  compassIcon,
  emailIcon,
  contactsIcon,
  bankingIcon,
  webBrowserIcon,
  photosIcon,
  gpsTrackerIcon,
  magnifierIcon,
  mapIcon,
  musicIcon,
  phoneIcon,
  voiceRecorderIcon,
  rssIcon,
  rulerIcon,
  settingsIcon,
  debianStoreIcon,
  clockIcon,
  videoChatIcon,
} from "../../assets/icons";

import IconButton from './IconButton';

const HomeScreen = () => {
	const mainApps = [
	  { name: 'Files', icon: filesIcon, component: null },
    { name: 'Books', icon: booksIcon, component: null },
    { name: 'Calendar', icon: calendarIcon, component: null },
    { name: 'Notes', icon: notesIcon, component: null },
    { name: 'Calculator', icon: calculatorIcon, component: null },
    { name: 'Camera', icon: cameraIcon, component: null },
    { name: 'SMS', icon: smsIcon, component: null },
    { name: 'Weather', icon: weatherIcon, component: null },
    { name: 'Compass', icon: compassIcon, component: null },
    { name: 'Email', icon: emailIcon, component: null },
    { name: 'Contacts', icon: contactsIcon, component: null },
    { name: 'Banking', icon: bankingIcon, component: null },
    { name: 'Web Browser', icon: webBrowserIcon, component: null },
    { name: 'Photos', icon: photosIcon, component: null },
    { name: 'GPS Tracker', icon: gpsTrackerIcon, component: null },
    { name: 'Magnifier', icon: magnifierIcon, component: null },
    { name: 'Map', icon: mapIcon, component: null },
    { name: 'Music', icon: musicIcon, component: null },
    { name: 'Phone', icon: phoneIcon, component: null },
    { name: 'Voice Recorder', icon: voiceRecorderIcon, component: null },
    { name: 'RSS', icon: rssIcon, component: null },
    { name: 'Ruler', icon: rulerIcon, component: null },
    { name: 'Settings', icon: settingsIcon, component: null },
    { name: 'Debian Store', icon: debianStoreIcon, component: null },
    { name: 'Clock', icon: clockIcon, component: null },
    { name: 'Video Chat', icon: videoChatIcon, component: null },
	];
	return (
		<div style="margin-left: auto; margin-right: auto; display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(6, 1fr); row-gap: 1rem; column-gap: 2.75rem;">
			<For each={mainApps}>
			{app => (
				<IconButton name={app.name} icon={app.icon} />
			)}
			</For>
		</div>
	);
}

export default HomeScreen;
