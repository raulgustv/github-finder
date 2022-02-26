import React from 'react';
import spinner from './assets/spinner.gif';

const Spinner = () => {
  return (
    <div className="w-100 t-20">
        <img src={spinner} alt="Loading..." width={180} />
    </div>
  )
}

export default Spinner