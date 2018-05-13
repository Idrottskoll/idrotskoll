import React, { Component } from 'react';
import { Link } from '../styles';

export default class Header extends Component {
    render() {
        return (
          <div>
            <div className="row menu">
              <div className="large-6">
                <img className="logo" src={require('../../images/icon.png')} />
              </div>
              <div className="large-6 inline display-right">
                <Link className="lm-20" href="#">Tablå</Link>
                <Link className="lm-20" href="#">Lägg inspelningförfrågan</Link>
                <Link className="lm-20 bold" href="">Konto</Link>
              </div>
            </div>
          </div>
        );
    }
}
