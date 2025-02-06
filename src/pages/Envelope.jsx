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
      <div id="mainDiv">
        <div id="stamp">
          <img src={stamp} alt="stamp" onClick={openEnvelope} />
        </div>
        <div id="container">
          <h1>For {localStorage.getItem("name")}</h1>
        </div>
      </div>
    </>
  )
}

export default Envelope
