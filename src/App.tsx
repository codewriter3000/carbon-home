import HomeScreen from "./screens/HomeScreen";
import LockScreen from "./screens/LockScreen";
import SMS from "./screens/SMS/Conversation";
import Keyboard from "./components/Keyboard/Keyboard";
import Settings from "./screens/Settings/Settings";
import "./App.css";

function App() {

  return (
    <main class="container">
			<Settings />
      {/*<SMS />
			<Keyboard />*/}
    </main>
  );
}

export default App;
