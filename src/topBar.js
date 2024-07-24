import './App.css';

function TopBar({setActiveTopBar, clicked}) {

  return (
    
    <div className="topBar">
      <div className='iconDiv'></div>
      <div className='fillerDiv'></div>
      <div className='content'>
      <ul>
        {/* <ListItem val={'top'} currClass={(clicked === 0 ? 'active' : 'notActive')} name='Home' handleBarClick={() => setActiveTopBar(0)}/>
        <ListItem val={'projects'} currClass={(clicked === 1 ? 'active' : 'notActive')} name='Projects' handleBarClick={() => setActiveTopBar(1)}/>
        <ListItem val={'skills'} currClass={(clicked === 2 ? 'active' : 'notActive')} name='Skills' handleBarClick={() => setActiveTopBar(2)}/>
        <ListItem val={'experience'} currClass={(clicked === 3 ? 'active' : 'notActive')} name='Experience' handleBarClick={() => setActiveTopBar(3)}/> */}
        {/* <ListItem val={'games'} currClass={(clicked === 4 ? 'active' : 'notActive')} name='Games' handleBarClick={() => setActiveTopBar(4)}/> */}

        <ListItem val={'top'} currClass={(clicked === 0 ? 'active' : 'notActive')} name='Home' handleBarClick={() => setActiveTopBar(0)}/>
        <ListItem val={'projects'} currClass={(clicked === 1 ? 'active' : 'notActive')} name='Projects' handleBarClick={() => setActiveTopBar(1)}/>
        <ListItem val={'skills'} currClass={(clicked === 2 ? 'active' : 'notActive')} name='Skills' handleBarClick={() => setActiveTopBar(2)}/>
        <ListItem val={'experience'} currClass={(clicked === 3 ? 'active' : 'notActive')} name='Experience' handleBarClick={() => setActiveTopBar(3)}/>
        <ListItem val={'contactMe'} currClass={(clicked === 4 ? 'active' : 'notActive')} name='Contact' handleBarClick={() => setActiveTopBar(4)}/>
      </ul>
      </div>
      <div className='fillerDiv'></div>
      <div className='iconDiv'>
      </div>
    </div>
  );
}

function ListItem({val, currClass, name, handleBarClick}) {
  return (
    <li><a href={'#' + val} onClick={handleBarClick} className={currClass}>{name}</a></li>
  );
}

export default TopBar;
