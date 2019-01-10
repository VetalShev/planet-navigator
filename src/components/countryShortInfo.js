import React from 'react';

export default function (props) {
  return (
    <div>
      name: {props.data.name} <br/>
      id: {props.data.id}
    </div>
  )
}