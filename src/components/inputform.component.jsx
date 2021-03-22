import React from 'react';


const InputForm = () => {
    return (
        <div className="form">
        <form>
          <h1>Add item</h1>
          <input type="text" placeholder="task"></input>
          <input type="date"></input>
          <input type="textfield" placeholder="description"></input>
        </form>
        <button type="submit">Submit</button>
      </div>
    )
}

export default InputForm;