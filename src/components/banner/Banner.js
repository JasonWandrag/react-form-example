import "./Banner.css";

import Avatar from "../../assets/face.svg";
import Arrow from "../../assets/arrow.svg";

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Banner = ({ active, handleToggle }) => {
  const isActive = active ? "active" : "";
  const toggleContent = async () => {
    handleToggle(!active);
    if (!active) {
      await waitForMs(500);
      document.querySelector("#contact-form").scrollIntoView();
    }
  };

  return (
    <div className='banner'>
      <img src={Avatar} alt='Avatar' />
      <div className='banner-text'>
        <h2>Front-end challenge!</h2>
        <h4>This is a design that I coded up to impress you</h4>
      </div>
      <button className={"toggleButton " + isActive}>
        <img onClick={toggleContent} src={Arrow} alt='Arrow' />
      </button>
    </div>
  );
};

export default Banner;
