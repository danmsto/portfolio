import React, { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

function ThemeSwitcher() {

  var b = document.querySelector('body');

  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Dark', value: '1' },
    { name: 'Light', value: '2' },
    { name: 'Colour', value: '3' },
  ];

  
  const switchTheme = () => {
    if (radioValue === '1') {
      b.style.setProperty('--background', 'black');
      b.style.setProperty('--foreground', '#2C394B');
      b.style.setProperty('--highlight', '#334756');
      b.style.setProperty('--text', 'white');
      b.style.setProperty('--buttoninteract', '#202d36');
      b.style.setProperty('--badge-brightness', '100');
    } else if (radioValue === '2') {
      b.style.setProperty('--background', 'white');
      b.style.setProperty('--foreground', 'whitesmoke');
      b.style.setProperty('--highlight', '#ECE8DD');
      b.style.setProperty('--text', 'black');
      b.style.setProperty('--buttoninteract', '#dad2bc');
      b.style.setProperty('--badge-brightness', '0');
    } else if (radioValue === '3') {
      b.style.setProperty('--background', 'mediumseagreen');
      b.style.setProperty('--foreground', 'white');
      b.style.setProperty('--highlight', 'powderblue');
      b.style.setProperty('--text', 'black');
      b.style.setProperty('--buttoninteract', '#9DC7CC');
      b.style.setProperty('--badge-brightness', '0');
    }
  }

  return (
    
    <ButtonGroup>
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          className="theme-switcher btn"
          type="radio"
          variant={'outline-failure'}
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
          onLoad={switchTheme()}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>

    )

}

export default ThemeSwitcher;