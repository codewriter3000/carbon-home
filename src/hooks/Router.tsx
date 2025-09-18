import { children, onMount, createSignal, createContext, useContext, JSX, ParentComponent } from 'solid-js';
type Screen = JSX.Element;
type Application = {
	name: string;
	rootComponent: JSX.Element;
	screenStack: Screen[];
};
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
	goHome: () => void;
	goToApp: (app: Application) => void;
	closeAllApps: () => void;
	forward: (screen: Screen) => void;
	backward: () => Screen;
	backUntil: (screen) => Screen;
};

const RouterCtx = createContext<RouterAPI>();

const RouterErrorComponent = () => {
	return (
		<div>There is an error with the router</div>
	);
};

export const StackRouterProvider: ParentComponent = (props) => {
	const resolvedChildren = children(() => props.children);

	onMount(() => {
		if (Array.isArray(resolvedChildren()) && resolvedChildren().length > 1) {
			throw new Error('There should only be 1 child within the StackRouterProvider');
		}

		console.log('screen: ' + stack()[stack().length - 1]);
	});

	const [state, setState] = createSignal<Application[Screen[]]>([]);
	const [frontedAppIndex, setFrontedAppIndex = createSignal<number>(-1);

	const getIndexOfApp = app => {
		for (let i = 0; i < state().length; i++) {
			if (state()[i].name === app.name) {
				return i;
			}
		}

		return -2;
	};

	const api: RouterAPI = {
		getState: state(),
		openApp: app => {
			setState([...state(), app])
			setFrontedAppIndex(state().length - 1);
		},
		closeApp: app => {
			const appIndex = getIndexOfApp(app);
			setState([
				...state().slice(0, appIndex),
				...state().slice(appIndex + 1)
			]);
		},
		goHome: () => setFrontedAppIndex(-1);
		goToApp: app => {
			setFrontedAppIndex(getIndexOfApp(app));
		},
		closeAllApps: () => setFrontedAppIndex(-1);
		forward: screen => {
			const newScreenStack = [...state()[frontedAppIndex].screenStack, screen];
			setState([
				...state().slice(0, frontedAppIndex),
				state()[frontedAppIndex].screenStack = newScreenStack,
				...state().slice(frontedAppIndex + 1)
			]);
		},
		backward: () => {
		};
		backUntil: (screen) => {
		};
	};

  return <RouterCtx.Provider value={api}>{props.children}</RouterCtx.Provider>;
};

export function useStackRouter(): RouterAPI {
  const ctx = useContext(RouterCtx);
  if (!ctx) throw new Error('useStackRouter must be used inside <StackRouterProvider>');
  return ctx;
}

