import React, { Component } from 'react';
import FormationsContainer from '../../containers/formations/FormationsContainer';

class FormationsComponent extends Component {  
  render() {
    return (
      <div>
        <FormationsContainer displayPage="list" />
      </div>
    );
  }

}

export default FormationsComponent;