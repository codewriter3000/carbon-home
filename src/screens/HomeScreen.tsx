import { For } from "solid-js";

import filesIcon from "../assets/icons/archive.svg";
import booksIcon from "../assets/icons/book.svg";
import calendarIcon from "../assets/icons/calendar.svg";
import notesIcon from "../assets/icons/stickies.svg";
import calculatorIcon from "../assets/icons/calculator.svg";
import cameraIcon from "../assets/icons/camera.svg";
import smsIcon from "../assets/icons/chat.svg";
import weatherIcon from "../assets/icons/cloudy.svg";
import compassIcon from "../assets/icons/compass.svg";
import emailIcon from "../assets/icons/email.svg";
import contactsIcon from "../assets/icons/events.svg";
import bankingIcon from "../assets/icons/finance.svg";
import webBrowserIcon from "../assets/icons/globe.svg";
import photosIcon from "../assets/icons/image.svg";
import gpsTrackerIcon from "../assets/icons/location.svg";
import magnifierIcon from "../assets/icons/magnify.svg";
import mapIcon from "../assets/icons/map.svg";
import musicIcon from "../assets/icons/music.svg";
import phoneIcon from "../assets/icons/phone.svg";
import voiceRecorderIcon from "../assets/icons/recording.svg";
import rssIcon from "../assets/icons/rss.svg";
import rulerIcon from "../assets/icons/ruler.svg";
import settingsIcon from "../assets/icons/settings.svg";
import debianStoreIcon from "../assets/icons/store.svg";
import clockIcon from "../assets/icons/time.svg";
import videoChatIcon from "../assets/icons/video--chat.svg";

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
				<div class="app" style="height: 70px; width: 32px; display: flex; flex-direction: column; align-items: center; pointer: cursor;">
					<img src={app.icon} />
					<span style="line-height: normal;">{app.name}</span>
				</div>
			)}
			</For>
		</div>
	);
}

export default HomeScreen;
