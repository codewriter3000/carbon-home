import HomeScreen from "./screens/HomeScreen";
import LockScreen from "./screens/LockScreen";
import SMS from "./screens/SMS/Conversation";
import Keyboard from "./components/Keyboard/Keyboard";
import "./App.css";

function App() {

  return (
    <main class="container">
      <SMS />
			<Keyboard />
    </main>
  );
}

export default App;
