import {
  createContext,
  useContext,
  useReducer,
} from 'react';

const MenuContext = createContext(null);

const menuReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW':
      return true;
    case 'HIDE':
      return false;
    default:
      return state;
  }
};

export function MenuProvider({ children }) {
  const [state, dispatch] = useReducer(menuReducer, false);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuValue() {
  const value = useContext(MenuContext);
  if (value === null) throw Error('Cannot use outside of SidebarProvider');
  const { state } = value;
  return state;
}

export function useMenuDispatch(){
  const value = useContext(MenuContext);
  if (value === null) throw Error('Cannot use outside of SidebarProvider');
  const { dispatch } = value;
  return dispatch;
}