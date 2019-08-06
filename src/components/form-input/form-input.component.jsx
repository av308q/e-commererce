import React from 'react';

import './form-imput.styles.scss';

const formInput = ({ handleChange, label, ...otherProps}) => (
  <div className = "group">
    <input className='form-input' onChange= {handleChange} {...otherProps} />
    {
      label ?
      (<lable className={`${otherProps.value.length ? 'shrink' : ''
      } form-input-lable`}
      >
        {label}

      </lable>)
      : null
    }
  </div>
)

export default formInput;