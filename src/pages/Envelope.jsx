import stamp from '../assets/stamp.png'
import { useNavigate } from "react-router-dom"

function Envelope() {
  const navigate = useNavigate();

  const openEnvelope = () => {
    console.log("Envelope opened");
    navigate("/valentine");
  }

  return (
    <> 
      <div id="mainDiv" className='desktop-ui-element'>
        <div id="stamp">
          <img title='Click to open the envelope' src={stamp} alt="stamp" onClick={openEnvelope} />
        </div>
        <div id="container">
          <h1>For {localStorage.getItem("name")}</h1>
        </div>
      </div>
      <div id="not-desktop">
        This website is only available for desktop
      </div>
    </>
  )
}

export default Envelope
