import "./Form.css";
import { ReactComponent as MaleIcon } from "../../assets/mars-symbol.svg";
import { ReactComponent as FemaleIcon } from "../../assets/venus-symbol.svg";
import { ReactComponent as CardIcon } from "../../assets/card.svg";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form className='form' onSubmit={handleSubmit} id='contact-form'>
      <div className='input-group'>
        <input type='text' name='name' id='name' placeholder='Name' />
        <label htmlFor='name'>Name</label>
      </div>
      <div className='input-group'>
        <div className='radio-group-container'>
          <div className='radio-group'>
            <input type='radio' name='gender' id='male' />
            <label htmlFor='male'>
              <div className='radio-image-wrapper'>
                <MaleIcon />
              </div>
              Male
            </label>
          </div>
          <div className='radio-group'>
            <input type='radio' name='gender' id='female' />

            <label htmlFor='female'>
              <div className='radio-image-wrapper'>
                <FemaleIcon />
              </div>
              Female
            </label>
          </div>
        </div>
        <span>Gender</span>
      </div>
      <div className='input-group'>
        <input type='date' name='dob' id='dob' placeholder='01/02/1990' />
        <label htmlFor='dob'>Date of Birth</label>
      </div>
      <div className='input-group'>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='example@email.co.za'
        />
        <label htmlFor='email'>Email</label>
      </div>
      <div className='input-group'>
        <input
          type='tel'
          name='mobile'
          id='mobile'
          placeholder='+27 98 765 4321'
        />
        <label htmlFor='mobile'>Mobile</label>
      </div>
      <div className='input-group'>
        <input
          type='text'
          name='custId'
          id='custId'
          placeholder='148526-ERD9875 65'
        />
        <label htmlFor='custId'>Customer ID</label>
      </div>
      <div className='input-group'>
        <div className='radio-group-container'>
          <div className='radio-group'>
            <input type='radio' name='membership' id='classic' />

            <label htmlFor='classic'>
              <div className='radio-image-wrapper'>
                <CardIcon />
              </div>
              Classic
            </label>
          </div>
          <div className='radio-group'>
            <input type='radio' name='membership' id='silver' />

            <label htmlFor='silver'>
              <div className='radio-image-wrapper'>
                <CardIcon />
              </div>
              Silver
            </label>
          </div>
          <div className='radio-group'>
            <input type='radio' name='membership' id='gold' />

            <label htmlFor='gold'>
              <div className='radio-image-wrapper'>
                <CardIcon />
              </div>
              Gold
            </label>
          </div>
        </div>
        <span>Membership</span>
      </div>
      <div className='form-footer'>
        <button type='reset' className='form-button'>
          Cancel
        </button>
        <button type='submit' className='form-button'>
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
