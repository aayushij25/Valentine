import stamp from '../assets/stamp.png'
import closeSign from '../assets/close.svg'
import endVid from '../assets/endVid.mp4'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from "react-router-dom"

function Open() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  }

  return (
    <> 
      <div id="mainOpenDiv">
        <div id="stamp">
          <img src={stamp} alt="stamp" onClick={logout} />
        </div>
        <div>
          <div>
            <h2>Will you be my Valentine?</h2>
          </div>
          <div id='buttons'>
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
            <Popup trigger=
                {<div id='no'>No</div>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Wrong answer! Please try again.
                            </div>
                            <div>
                              <img id='noPopupBtn' src={closeSign} alt="close" onClick={() => close()} />
                            </div>
                        </div>
                    )
                }
            </Popup>
          </div>
        </div>
      </div>
    </>
  )
}

export default Open
