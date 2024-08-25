import { CircleHelp, CircleX, Cog, History, Home, MessageSquareDashed, User, Users, VenetianMask, Wrench } from 'lucide-react';
import { useMenuDispatch, useMenuValue } from '../contexts/MenuContext';
import nightSky from '../assets/blueNight.jpg';

function SideBar() {
  const menuValue = useMenuValue();
  const dispatch = useMenuDispatch();

  if(menuValue)return(
    <div className='menu relative'>
      <button className='z-10 absolute top-3 right-4' onClick={() => dispatch({
        type: 'HIDE'
      })}>
        <CircleX />
      </button>
      <div className='absolute top-0 w-full'>
        <h2 className="text-3xl font-bold absolute top-2 left-1/2 -translate-x-1/2">Dashboard</h2>
        <img src={nightSky} alt="night sky"
          className='w-full z-0' />
      </div>
      <MenuItems />
    </div>
  );

  return (
    <div className={`sidebar ${menuValue ?'flex':'hidden'} md:flex flex-col justify-around items-center w-60 2xl:w-72 h-[100vh] min-h-[600px] sticky top-0 bg-[#000308]`}>
      <div className='absolute top-0'>
        <h2 className="text-white text-3xl font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">Dashboard</h2>
        <img src={nightSky} alt="night sky"/>
      </div>
      <div className='w-full' style={{ paddingTop: 'calc(100% * (2/3))' }}></div>
      <MenuItems />
    </div>
  );
}

function MenuItems(){
  return(
    <>
      <div className="group1 flex flex-col gap-5 z-10">
        <button>
          <Home />
          <div>Home</div>
        </button>
        <button>
          <User />
          <div>User</div>
        </button>
        <button>
          <MessageSquareDashed />
          <div>Messages</div>
        </button>
        <button>
          <History />
          <div>History</div>
        </button>
        <button>
          <Wrench />
          <div>Tasks</div>
        </button>
        <button>
          <Users />
          <div>Communities</div>
        </button>
      </div>

      <div className="group2 flex flex-col gap-5 relative right-5 z-10">
        <button>
          <Cog />
          <div>Settings</div>
        </button>
        <button>
          <CircleHelp />
          <div>Support</div>
        </button>
        <button>
          <VenetianMask />
          <div>Privacy</div>
        </button>
      </div>
    </>
  );
}

export default SideBar;