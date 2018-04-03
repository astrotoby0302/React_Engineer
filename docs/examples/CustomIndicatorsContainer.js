// @flow

import React from 'react';
import Select, { components } from '../../src';
import { colourOptions } from '../data';

const IndicatorsContainer = (props) => {
  return (
    <div style={{ background: '#2684FF' }}>
      <components.IndicatorsContainer {...props}/>
    </div>
  );
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ IndicatorsContainer }}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    options={colourOptions}
  />
);
