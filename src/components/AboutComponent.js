import React, { Component } from 'react';

class AboutComponent extends Component {
  render() {
    return (
        <div>
          <h1>Concernant la plateforme de Formations</h1>
          <p>
            Une plateforme pour gérer les formations en ligne :
          </p>
          <ul>
            <li>Gestion des Formateurs</li>
            <li>Gestion des Formations</li>
            <li>Gestion des Etudients</li>
            <li>Gestion de Paiements en ligne</li>
          </ul>
        </div>
    );
  }
}

export default AboutComponent;