import Content from './components/Content';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import { useMenuValue } from './contexts/MenuContext';

function App() {
  const menuValue = useMenuValue();

  if(menuValue)return (
    <SideBar />
  );

  return (
    <div className='app'>
      <Header />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;