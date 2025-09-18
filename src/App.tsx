import { StackRouterProvider } from "./hooks/StackRouter";
import { HomeScreen } from "./core/HomeScreen";
import LockScreen from "./core/LockScreen";
import SMS from "./apps/SMS/Conversation";
import Keyboard from "./components/Keyboard/Keyboard";
import Settings, { ActionCenter } from "./apps/Settings/Settings";
import "./App.css";

function App() {

  return (
    <main class="container">
			<StackRouterProvider>
				<HomeScreen />
      	{/*<SMS />
				<Keyboard />*/}
			</StackRouterProvider>
    </main>
  );
}

export default App;
