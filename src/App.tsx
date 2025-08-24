import { StackRouterProvider } from "./hooks/StackRouter";
import HomeScreen from "./screens/HomeScreen";
import LockScreen from "./screens/LockScreen";
import SMS from "./screens/SMS/Conversation";
import Keyboard from "./components/Keyboard/Keyboard";
import Settings, { ActionCenter } from "./screens/Settings/Settings";
import "./App.css";

function App() {

  return (
    <main class="container">
			<StackRouterProvider>
				<ActionCenter />
      	{/*<SMS />
				<Keyboard />*/}
			</StackRouterProvider>
    </main>
  );
}

export default App;
