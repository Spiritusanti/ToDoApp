import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import './InputForm.styles.scss'

const InputForm = ({name, setName, handleSubmit}) => {
    return (
        <div className="form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-container">
              <input value={name} placeholder="Add Todo" onChange={e => setName(e.target.value)} />
            </div>
          </form>
          <CustomButton handleClick={handleSubmit} text={'create'} />
        </div>
    ); 
}

export default InputForm;