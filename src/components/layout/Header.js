import React, { Component } from 'react';
import { Link } from '../styles';


export default class Header extends Component {
    render() {
        return (
          <div className="menu-container row">
            <div className=" menu">
              <div className="large-6">
                <img className="logo" src={require('../../images/icon.png')} />
              </div>
              <div className="large-6 inline display-right">
                <Link className="lm-20" href="/tabla">Tablå</Link>
                <Link className="lm-20" href="/inspelningsforfragan">Lägg inspelningförfrågan</Link>
                <Link className="lm-20 bold" href="/konto">Konto</Link>
              </div>
            </div>
        );
    }
}
