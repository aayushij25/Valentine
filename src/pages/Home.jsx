import { useState } from "react"
import { useNavigate } from "react-router-dom"
import bgHome from '../assets/lips.jpg'

function Home() {
  localStorage.clear();
  const navigate = useNavigate();

  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = () => {
    localStorage.setItem("name", name);
    navigate("/envelope");
  }

  return (
    <>
      <img id='bgImg' src={bgHome} alt="bg-Home" />
      <div id="homeForm">
        <label htmlFor="name">Enter Name: </label>&nbsp;
        <input id="inputName" type="text" name="name" value={name} onChange={handleInputChange} />
      </div>
      <div id="submitName" onClick={onSubmit}>Submit</div>
    </>
  )
};

export default Home