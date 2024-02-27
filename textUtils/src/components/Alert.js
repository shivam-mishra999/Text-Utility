
import React from 'react'

export default function Alert(props) {

  const capitalizeFirstChar = (str) => {
    const word = str.charAt(0).toUpperCase()+str.slice(1);
    return word;
  }

  return (
    <div>
      {props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalizeFirstChar(props.alert.type)}</strong> : {props.alert.msg}
        
     </div> )};
    </div>
  )
}
