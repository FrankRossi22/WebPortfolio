import { useState, useRef, useEffect } from 'react';
import './App.css';
import './banner.css';

function useInterval(callback, delay) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => callbackRef.current(), delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
function Banner() {
  //const [isExtended, setIsExtended] = useState(false)
  const [currBackground, setCurrBackground] = useState(1)
  const [sub, setSub] = useState(false);

  function updateBackground() {
    var mod = 1;
    if(currBackground >= 4) {
      setSub(true)
      mod = -1;
    }else if(currBackground <= 1) {
      setSub(false);
    }else if(sub) {
      mod = -1;
    } 
    setCurrBackground( currBackground + mod )
  }
  useInterval(updateBackground, 3000)
  useEffect(() => {
    
  })
  // style={{"background-color": "#000000"}}
  // const myStyle = {
  //   height: (isExtended ? 800 : 400)
  // }
  return (
      <div className={'bannerBackground' + currBackground} tabIndex={0}>
      <div className='banner'>
        <a id='top' href='#topScreen'><p></p></a>
        <div className='bannerFlex'>
          <div className='bannerPicture'><img src='./images/portIcon.jpg' alt='npmFrank Rossi'/></div> 
          <div className='aboutMe'>
            <h1>Frank Rossi</h1>
            <p>CSE Student at The Ohio Stte University</p>
            </div>
        </div>
        <br />
        
      </div>
      </div>
  );

  
}

export default Banner;
