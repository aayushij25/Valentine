import stamp from '../assets/stamp.png'
import closeSign from '../assets/close.svg'
import endVid from '../assets/endVid.mp4'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from 'react';

function Open() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  }

  const btnRef = useRef(null);
  const [position, setPosition] = useState({top:430, left:885});
  useEffect(() => {
    const handleMouseMove = (e) => {
      if(!btnRef.current) return;
      const btn = btnRef.current.getBoundingClientRect();
      const distance = Math.hypot(
        e.clientX - (btn.left + btn.width /2),
        e.clientY - (btn.top + btn.height /2)
      );

      if(distance < 120) {
        moveButton();
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const moveButton = () => {
    const padding = 100;
    const maxX = window.innerWidth - padding;
    const maxY = window.innerHeight - padding;

    const newLeft = Math.random() * maxX;
    const newTop = Math.random() * maxY;

    setPosition({top: newTop, left: newLeft});
  };
  
  return (
    <> 
      <div id="mainOpenDiv" className='desktop-ui-element'>
        <div id="stamp">
          <img title='Click to logout' src={stamp} alt="stamp" onClick={logout} />
        </div>
        <div>
          <div>
            <h2>Will you be my Valentine?</h2>
            <br />
          </div>
          <Popup trigger=
            {<div id='yes'>Yes!</div>} 
            modal nested>
              {
                close => (
                  <>
                    <div id="yesModal" className='modal'>
                      <div id="yesContent" className='content'>
                        <video id='video' src={endVid} autoPlay></video>
                      </div>
                      <div>
                        <img id='noPopupBtn' src={closeSign} alt="close" onClick={() => close()} />
                      </div>
                    </div>
                    <h3>I LOVE YOU!</h3>
                  </>
                )
              }
          </Popup>
          <button 
          id='no'
          ref={btnRef}
          style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
            transition: "0.1s ease-out",
          }}
          >
            No
          </button>
        </div>
      </div>
      <div id="not-desktop">
        This website is only available for desktop
      </div>
    </>
  )
}

export default Open
