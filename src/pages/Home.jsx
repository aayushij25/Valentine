import { useState } from "react"
import { useNavigate } from "react-router-dom"
import bgHome from '../assets/lips.jpg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import closeSign from '../assets/close.svg'

function Home() {
  localStorage.clear();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [showMesg, setShowMsg] = useState(true);

  const handleInputChange = (e) => {
    setName(e.target.value);  
  };

  const onSubmit = () => {
    if(name.length>0) {
      localStorage.setItem("name", name);
      navigate("/envelope");
      setShowMsg(false);
    } else {
      setShowMsg(true);
    }
  }

  return (
    <>
      
      <img id='bgImg' src={bgHome} alt="bg-Home" />
      <div id="home-main">
        <div id="homeForm">
          {/* <label htmlFor="name">Enter Name: </label>&nbsp; */}
          <input id="inputName" type="text" name="name" value={name} placeholder="Enter your name" onChange={handleInputChange} />
        </div>
        <div id="submitName" onClick={onSubmit}>Submit</div>
        { name.length == 0 &&
          <Popup trigger=
            {<div id="submitName" onClick={onSubmit}>Submit</div>} 
            modal nested>
            {
              close => (
                <div className='modal'>
                  <div className='content'>
                    {showMesg ? 'Please enter name.' : 'Ok'}
                  </div>
                  <div>
                    <img id='noPopupBtn' src={closeSign} alt="close" onClick={() => close()} />
                  </div>
                </div>
                )
            }
          </Popup>
        }
      </div>
    </>
  )
};

export default Home