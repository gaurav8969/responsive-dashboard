import { ArrowLeft, ArrowLeftFromLine, ArrowRightFromLine, Menu, Search } from 'lucide-react';
import { useState } from 'react';
import { useMenuDispatch } from '../contexts/MenuContext';
import barbarian from '../assets/barbarian.png';

function Header(){
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const menuDispatch = useMenuDispatch();

  return(
    <div className="header h-[56px] flex md:h-auto">
      <div className='fullnavbar hidden flex-grow md:flex flex-col gap-1 p-3 bg-[#000308]'>
        <div className="row1 flex gap-4 justify-between">
          {form(showFullWidthSearch, setShowFullWidthSearch)}
          <div className="flex gap-2 items-center relative top-1">
            <img src={barbarian} alt="barbarian" className='lg:h-14 lg:w-14 rounded-full h-12 w-12 bg-barbarianPurple' />
            <div className='text-lg lg:text-2xl font-serif text-white'>Mr. Barb</div>
          </div>
        </div>
        <div className="row2 flex justify-between items-center">
          <div className='flex gap-1 items-center'>
            <img src={barbarian} alt="barbarian" className='lg:h-16 lg:w-16 rounded-full w-12 h-12 bg-barbarianPurple' />
            <div className='font-sans text-sm lg:text-lg text-white'>
              <p>Hi there</p>
              <p>Mr. Barb(@mrbarbarian)</p>
            </div>
          </div>
          {menuButtons(true)}
        </div>
      </div>

      <div className="mininavbar md:hidden flex w-full">
        <div className="flex gap-4 justify-between items-center p-4 w-full">
          {
            !showButtons &&(
              <div className='flex gap-3'>
                <button
                  onClick={() => menuDispatch({
                    type: 'SHOW'
                  })}>
                  <Menu />
                </button>
                {form(showFullWidthSearch, setShowFullWidthSearch)}
                <button className={`${showFullWidthSearch? 'hidden': 'block'}`} onClick={() => setShowFullWidthSearch(true)}>
                  <Search />
                </button>
              </div>
            )
          }

          {
            !showFullWidthSearch && !showButtons &&
            (
              <div className='relative left-5 text-lg font-bold'>
                Dashboard
              </div>
            )
          }

          {
            !showFullWidthSearch && !showButtons && (
              <button className="ph:hidden relative left-10" onClick={() => setShowButtons(true)}>
                <ArrowLeftFromLine />
              </button>
            )
          }
          {
            showButtons && (
              <div className='flex flex-grow justify-center gap-5'>
                <button type='submit' onClick={() => setShowButtons(false)}>
                  <ArrowRightFromLine />
                </button>
                {menuButtons(true)}
              </div>
            )
          }
          {
            menuButtons()
          }
        </div>
      </div>
    </div>
  );
}

function menuButtons(display=false){
  const buttonStyles = `${display? 'flex':'hidden'} ph:flex rounded-lg lg:h-9 items-center p-1 h-[24px] lg:p-2 bg-white text-sm lg:text-xl font-mono`;

  return (
    <div className='flex gap-2 mr-4'>
      <button className={`${buttonStyles}`}>New</button>
      <button className={`${buttonStyles}`}>Upload</button>
      <button className={`${buttonStyles}`}>Share</button>
    </div>
  );
}

function form(showFullWidthSearch, setShowFullWidthSearch){
  const inputStyles = 'rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg focus:border-blue-500 outline-none w-full h-[42px]';

  return(
    <form onSubmit={(event) => event.preventDefault()}
      className={`flex flex-grow gap-4 max-w-[600px] ${showFullWidthSearch ? 'flex': 'hidden'}
        md:flex`}>
      <button className="md:hidden" onClick={() => setShowFullWidthSearch(false)}>
        <ArrowLeft />
      </button>
      <div className={`w-full gap-0 md:flex md:items-center ${showFullWidthSearch ? 'flex': 'hidden'}`}>
        <input type="search" placeholder="Search" className={`${inputStyles}`} />
        <button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0 h-[42px] bg-[#eee]" type='submit'>
          <Search />
        </button>
      </div>
    </form>
  );
}

export default Header;