import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import './InputForm.styles.scss'

const InputForm = () => {
    return (
        <div className="form">
          <form>
            <h1>Add item</h1>
            <div className='input-container'>
              <input type="text" placeholder="task" />
              <input type="date" />
              <input className='description' type="textfield" placeholder="description" />
            </div>
          </form>
        <CustomButton text={'make it so'}/>
      </div>
    );
}

export default InputForm;