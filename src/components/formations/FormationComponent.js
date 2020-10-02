import React, { Component } from 'react';

class FormationComponent extends Component {  
  render() {
    return (
      <form>
        <h3>Gérer Formation</h3>
        <label htmlFor="name">Nom de la formation</label>
        <input type="text"
            name="name"
            className="form-control"
            placeholder="Nom de la formation"
            ref="name"
            value=""/>
          <br/>

        <label htmlFor="desc">Description de la formation</label>
        <input type="text"
            name="desc"
            className="form-control"
            placeholder="Description de la formation"
            ref="desc"
            value=""/>
          <br/>

          <input type="submit" value="Sauvegarder" className="bnt bnt-default bnt-xs" />
      </form>
    );
  }

}

export default FormationComponent;