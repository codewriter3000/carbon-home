const Key = ({ key, style='' }) => {
	return (
		<div style={`background-color: #525252; padding-left: 4px; padding-right: 4px; padding-top: auto; padding-bottom: auto; height: 40px; width: 20px; border-radius: 5px; margin-top: 5px; margin-bottom: 5px; margin-left: 5px; margin-right: 5px; font-size: 20px; ${style}`}>
			{key}
		</div>
	);
};

const KeyboardLowerCase = () => {
	return (
		<div style="position: fixed; width: 100%; background-color: #262626; height: 200px; bottom: 0; border-top: 2px solid #161616; display: flex; flex-direction: column; align-items: center;">
			<div style="display: flex;">
				<Key key="q" />
				<Key key="w" />
				<Key key="e" />
				<Key key="r" />
				<Key key="t" />
				<Key key="y" />
				<Key key="u" />
				<Key key="i" />
				<Key key="o" />
				<Key key="p" />
			</div>
			<div style="display: flex; margin-left: 15px;">
				<Key key="a" />
				<Key key="s" />
				<Key key="d" />
				<Key key="f" />
				<Key key="g" />
				<Key key="h" />
				<Key key="j" />
				<Key key="k" />
				<Key key="l" />
			</div>
			<div style="display: flex;">
				<Key key="^" style="background-color: #393939; width: 35px;" />
				<Key key="z" />
				<Key key="x" />
				<Key key="c" />
				<Key key="v" />
				<Key key="b" />
				<Key key="n" />
				<Key key="m" />
				<Key key="<--" style="background-color: #393939; width: 35px;" />
			</div>
			<div style="display: flex;">
				<Key key="123" style="background-color: #393939; width: 70px;" />
				<Key key="space" style="background-color: #525252; width: 260px;" />
				<Key key="return" style="background-color: #393939; width: 70px;" />
			</div>
		</div>
	)
};

const KeyboardUpperCase = () => {
	return (
		<div style="position: fixed; width: 100%; background-color: #262626; height: 200px; bottom: 0; border-top: 2px solid #161616; display: flex; flex-direction: column; align-items: center;">
			<div style="display: flex;">
				<Key key="Q" />
				<Key key="W" />
				<Key key="E" />
				<Key key="R" />
				<Key key="T" />
				<Key key="Y" />
				<Key key="U" />
				<Key key="I" />
				<Key key="O" />
				<Key key="P" />
			</div>
			<div style="display: flex; margin-left: 15px;">
				<Key key="A" />
				<Key key="S" />
				<Key key="D" />
				<Key key="F" />
				<Key key="G" />
				<Key key="H" />
				<Key key="J" />
				<Key key="K" />
				<Key key="L" />
			</div>
			<div style="display: flex;">
				<Key key="v" style="background-color: #FFF; color: #000; width: 35px; font-weight: bold;" />
				<Key key="Z" />
				<Key key="X" />
				<Key key="C" />
				<Key key="V" />
				<Key key="B" />
				<Key key="N" />
				<Key key="M" />
				<Key key="<--" style="background-color: #393939; width: 35px;" />
			</div>
			<div style="display: flex;">
				<Key key="123" style="background-color: #393939; width: 70px;" />
				<Key key="space" style="background-color: #525252; width: 260px;" />
				<Key key="return" style="background-color: #393939; width: 70px;" />
			</div>
		</div>
	)
}

const KeyboardNumbers = () => {
	return (
		<div style="position: fixed; width: 100%; background-color: #262626; height: 200px; bottom: 0; border-top: 2px solid #161616; display: flex; flex-direction: column; align-items: center;">
			<div style="display: flex;">
				<Key key="1" />
				<Key key="2" />
				<Key key="3" />
				<Key key="4" />
				<Key key="5" />
				<Key key="6" />
				<Key key="7" />
				<Key key="8" />
				<Key key="9" />
				<Key key="0" />
			</div>
			<div style="display: flex;">
				<Key key="-" />
				<Key key="/" />
				<Key key=":" />
				<Key key=";" />
				<Key key="(" />
				<Key key=")" />
				<Key key="$" />
				<Key key="&" />
				<Key key="@" />
				<Key key={'"'} />
			</div>
			<div style="display: flex;">
				<Key key="#+=" style="background-color: #393939; width: 35px;" />
				<Key key="." />
				<Key key="," />
				<Key key="?" />
				<Key key="!" />
				<Key key="'" />
				<Key key="[" />
				<Key key="]" />
				<Key key="<--" style="background-color: #393939; width: 35px;" />
			</div>
			<div style="display: flex;">
				<Key key="ABC" style="background-color: #393939; width: 70px;" />
				<Key key="space" style="background-color: #525252; width: 260px;" />
				<Key key="return" style="background-color: #393939; width: 70px;" />
			</div>
		</div>
	)
}

const KeyboardSymbols = () => {
	return (
		<div style="position: fixed; width: 100%; background-color: #262626; height: 200px; bottom: 0; border-top: 2px solid #161616; display: flex; flex-direction: column; align-items: center;">
			<div style="display: flex;">
				<Key key="{" />
				<Key key="}" />
				<Key key="#" />
				<Key key="%" />
				<Key key="^" />
				<Key key="*" />
				<Key key="+" />
				<Key key="=" />
				<Key key="<" />
				<Key key=">" />
			</div>
			<div style="display: flex;">
				<Key key="_" />
				<Key key="\" />
				<Key key="|" />
				<Key key="~" />
				<Key key="Æ" />
				<Key key="¢" />
				<Key key="£" />
				<Key key="¥" />
				<Key key="†" />
				<Key key="‡" />
			</div>
			<div style="display: flex;">
				<Key key="#+=" style="background-color: #393939; width: 35px;" />
				<Key key="." />
				<Key key="," />
				<Key key="?" />
				<Key key="!" />
				<Key key="'" />
				<Key key="[" />
				<Key key="]" />
				<Key key="<--" style="background-color: #393939; width: 35px;" />
			</div>
			<div style="display: flex;">
				<Key key="ABC" style="background-color: #393939; width: 70px;" />
				<Key key="space" style="background-color: #525252; width: 260px;" />
				<Key key="return" style="background-color: #393939; width: 70px;" />
			</div>
		</div>
	)
}



const Keyboard = () => <KeyboardSymbols />;

export default Keyboard;
