function Content(){
  return (
    <div className="content flex flex-col items-center p-4">
      <div className="w-full fp:flex fp:gap-2 fp:items-center 2xl:items-start">
        <div className="projects w-full p-2 flex flex-col items-center">
          <h3 className="text-[16px] font-mono mb-3 sm:font-bold sm:text-xl">Your projects</h3>
          <div className="cards">
            <div className="card">Http</div>
            <div className="card">Emulator</div>
            <div className="card">Compiler</div>
            <div className="card">MC</div>
            <div className="card">FB</div>
            <div className="card">Json Parser</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4 w-full 2xl:max-w-fit">
          <div className="announcements text-center mx-4 max-w-[330px]">
            <h3 className="text-[16px] sm:text-xl font-bold font-mono mb-3">Announcements</h3>
            <div className="news flex flex-col items-center bg-white rounded-xl p-2">
              <h3 className="maintenance">Site Maintenance</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <hr />
              <h3 className="maintenance">Site Maintenance</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <hr />
              <h3 className="maintenance">Site Maintenance</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className="trending text-center mx-2">
            <div className="text-xl font-bold my-4">Trending</div>
            <div className="bg-white rounded-xl p-2 my-2 flex flex-col gap-4">
              <div className="user">
                <img className="profile bg-barbarianPurple" src="/assets/barbarian.png" alt="barb" />
                <div>
                  <div className="username">@Mr.Barb</div>
                  <p>World Peace Negotiator</p>
                </div>
              </div>
              <div className="user">
                <img className="profile" src="/assets/laserCat.png" alt="barb" />
                <div>
                  <div className="username">@Catman</div>
                  <p>Destroyer of Worlds</p>
                </div>
              </div>
              <div className="user">
                <img className="profile" src="/assets/oppenheimer.png" alt="barb" />
                <div>
                  <div className="username">@Oppy</div>
                  <p>Amused Spectator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;