import './App.css';
import { useState, useEffect } from 'react';
import TopBar from './topBar';
import Banner from './Banner';
import Portfolio from './Portfolio/Portfolio';

function FullPage() {
  const [activeIcon, setActiveIcon] = useState(null);
  // const [pagePos, setPagePos] = useState([]);
  // window.addEventListener('scroll', () => {
  //   if(window.scrollY > pagePos[4] - 60) {
  //     setActiveIcon(4);
  //   } else if (window.scrollY > pagePos[3] - 60) {
  //     setActiveIcon(3);
  //   } else if (window.scrollY > pagePos[2] - 60) {
  //     setActiveIcon(2);
  //   } else if (window.scrollY > pagePos[1] - 60) {
  //     setActiveIcon(1);
  //   }  else {
  //     setActiveIcon(0)
  //   }
  // })
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="mainContainer">
      <TopBar setActiveTopBar={setActiveIcon} clicked={activeIcon}/>
      <Banner />
      <Portfolio screenSize={width}/>
    </div>
  );
}


export default FullPage;
