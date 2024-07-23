import './App.css';
import { useState } from 'react';
import TopBar from './topBar';
import Banner from './Banner';
import Portfolio from './Portfolio/Portfolio';

function FullPage() {
  const [activeIcon, setActiveIcon] = useState(null);
  const [pagePos, setPagePos] = useState([]);
  window.addEventListener('scroll', () => {
    if(window.scrollY > pagePos[4] - 60) {
      setActiveIcon(4);
    } else if (window.scrollY > pagePos[3] - 60) {
      setActiveIcon(3);
    } else if (window.scrollY > pagePos[2] - 60) {
      setActiveIcon(2);
    } else if (window.scrollY > pagePos[1] - 60) {
      setActiveIcon(1);
    }  else {
      setActiveIcon(0)
    }
  })
  return (
    <div className="mainContainer">
      <TopBar setActiveTopBar={setActiveIcon} clicked={activeIcon}/>
      <Banner />
      <Portfolio setPosition={setPagePos} currPosition={pagePos} />
    </div>
  );
}


export default FullPage;
