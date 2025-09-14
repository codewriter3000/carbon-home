type Screen = JSX.Element;
type Application = JSX.Element | Screen[] | any;
type RouterState = {
	openApps: Application[];
	activeApp: Application;
	activeScreen: Screen;
};

/**
 * RouterAPI - The API for window management
 * 		- getState(): Gets the state of the router. An array of stacks to be precise.
 * 		- openApp(): Adds a stack to the array of stacks.
 * 		- closeApp(app): Removes an app from the array of stacks.
 * 		- goToApp(app): Goes to the app.
 * 		- closeAllApps(): Closes every app in the router.
 * 		- forward(screen): Adds an item to the current stack.
 * 		- forward(screen, app): Adds an item to another stack.
 * 		- backward(): Pops the top of the stack.
 * 		- backUntil(screen): Pops the stack until a certain item is at the top.
 **/

type RouterAPI = {
	getState: () => RouterState;
	openApp: (app: Application) => void;
	closeApp: (app: Application) => void;
	goToApp: (app: Application) => void;
	closeAllApps: () => void;
	forward: (screen: Screen) => void;
	backward: () => Screen;
	backUntil: (screen) => Screen;
};

