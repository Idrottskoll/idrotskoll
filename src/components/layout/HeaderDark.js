import React, { Component } from 'react';
import { Link } from '../styles';


export default class HeaderDark extends Component {
    render() {
        return (
          <div className="menu-container row dark">
            <div className="menu">
              <div className="large-6">
              <a href="/">
                <img className="logo" src={require('../../images/icon-dark.png')} />
              </a>
              </div>
              <div className="large-6 inline display-right">
                <Link className="lm-20" href="/tabla">Tablå</Link>
                <Link className="lm-20" href="/inspelningsforfragan">Lägg inspelningförfrågan</Link>
                <Link className="lm-20 bold" href="/konto">Konto</Link>
              </div>
            </div>
          </div>
        );
    }
}
