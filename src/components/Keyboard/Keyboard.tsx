const Key = ({ key, style='' }) => {
	return (
		<div style={`background-color: #525252; padding-left: 4px; padding-right: 4px; padding-top: auto; padding-bottom: auto; height: 30px; width: 20px; border-radius: 5px; margin: 10px; ${style}`}>
			{key}
		</div>
	);
};

const Keyboard = () => {
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

export default Keyboard;
