import React from 'react'


const EventProps: React.FC = () => {
  function handleDivClick() {
  alert('Div clicked');
}

function handleButtonClick() {
  alert('Button clicked');
}
return (

<div onClick={handleDivClick}>
  <button onClick={handleButtonClick}>Button 1</button>
  <button onClick={handleButtonClick}>Button 2</button>
</div>
)
}

export default EventProps
