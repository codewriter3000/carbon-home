import { createSignal, createContext, useContext, JSX, ParentComponent } from 'solid-js';

type Screen = JSX.Element;

type RouterAPI = {
  stack: () => Screen[];
  push: (screen: Screen) => void;
  pop: () => Screen | undefined;
  clear: () => void;
};

const RouterCtx = createContext<RouterAPI>();

export const StackRouterProvider: ParentComponent = (props) => {
  const [stack, setStack] = createSignal<Screen[]>([]);

  const api: RouterAPI = {
    stack,
    push: (screen) => setStack((s) => [screen, ...s]),
    pop: () => {
      const [top, ...rest] = stack();
      setStack(rest);
      return top;
    },
    clear: () => setStack([]),
  };

  return <RouterCtx.Provider value={api}>{props.children}</RouterCtx.Provider>;
};

export function useStackRouter(): RouterAPI {
  const ctx = useContext(RouterCtx);
  if (!ctx) throw new Error('useStackRouter must be used inside <StackRouterProvider>');
  return ctx;
}

