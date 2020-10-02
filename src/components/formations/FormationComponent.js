import React, { Component } from 'react';
import FormationsContainer from '../../containers/formations/FormationsContainer';

let formaId = 1;

class FormationComponent extends Component { 
  
  constructor(props, context) {
    super(props, context);

    formaId = this.props.match.params.formaId;
  }

  render() {
    return (
      <div>
        <FormationsContainer formaId={formaId} />
      </div>
    );
  }

}

export default FormationComponent;