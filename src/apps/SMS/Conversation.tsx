import { For, createSignal } from 'solid-js';
import Syd from '../../assets/syd.jpeg';
const Conversation = () => {
	const text = [
		{sender: 'other', timestamp: 'Jul 06, 2024 at 3:04PM', text: 'Question- how tf did you learn to speak Hebrew??'},
		{sender: 'me', text: 'A little bit of duolingo, a little bit of friends, and a little bit of the bible'},
		{sender: 'other', text: "I was just curious cause you don't see Hebrew spoken around here very often lol"},
		{sender: 'me', text: 'אתה לא טועה'},
		{sender: 'me', text: 'So if ur from media, im guessing ur also a huge wawa fan'},
		{sender: 'other', text: 'To answer question, I am currently wearing a Wawa schwarberfest shirt 😂'},
		{sender: 'other', text: "Ofc I'm a wawa fan"},
		{sender: 'me', text: '😂'},
		{sender: 'me', text: 'Im gonna go floating in the river today holding a hard mtn dew in 1 hand and a kelce hoagie in the other'},
		{sender: 'other', text: "That's the only correct way to do it 😂 it's giving true delconian vibes"},
		{sender: 'me', text: 'Ive never seen a county with so much pride before'},
		{sender: 'other', text: "What's that supposed to mean..? 🤨😂"},
		{sender: 'me', text: 'Delco'},
		{sender: 'me', text: 'What do you think it means? 😂'},
		{sender: 'other', text: 'Idk but it better be all good things 😂'},
		{sender: 'me', text: '😂'},
		{sender: 'me', text: 'Oh no i dont mean gay'},
		{sender: 'me', text: 'I mean pride like proud of where ur from'},
		{sender: 'other', text: `No I completely understood the first time 😂😂\nJust for some clarification, what are your honest opinions about delco..? 🤨`},

	];

	const primaryColor = '#0f62fe';
	const [previousSender, setPreviousSender] = createSignal('');

	return (
		<div style="margin-top: 100px;">
			<div style="position: fixed; left: 0; top: 0; padding-top: 10px; padding-bottom: 10px; background-color: #262626; border-bottom: 2px solid #161616; width: 100%; display: flex; flex-direction: column;">
				<div style="position: fixed; left: 12px; top: 40px; color: #0f62fe; text-decoration: underline; font-size: 20px;">Back</div>
				<img src={Syd} height={64} width={64} style="align-self: center; clip-path: circle();" />
				Syd
			</div>
			<For each={text}>
				{(msg, i) => {
					const prev = i() > 0 ? text[i() - 1] : null;
					const isSameSender = prev && prev.sender === msg.sender;

					return (
						<>
						{msg.timestamp && <div style="text-align: center; color: #8d8d8d; margin-top: 20px; margin-bottom: 20px;">{msg.timestamp}</div>}
						<div
							style={`display: flex; justify-content: ${
								msg.sender === 'me' ? 'flex-end' : 'flex-start'
							};`}
						>
							<div
								style={`
									background-color: ${msg.sender === 'me' ? primaryColor : '#262626'};
									max-width: 50%;
									padding: 10px 30px;
									margin: 10px;
									${isSameSender ? 'margin-top: 2px;' : 'margin-top: 10px;'}
									text-align: left;
									white-space: pre-wrap;
									border-radius: ${
										msg.sender === 'me'
											? '30px 30px 0px 30px'
											: '30px 30px 30px 0px'
									};
								`}
							>
								{msg.text}
							</div>
						</div>
						</>
					);
				}}
			</For>

		</div>
	);
}

export default Conversation;
