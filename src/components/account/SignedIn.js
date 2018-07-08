import React from 'react';
import { Title, SmallTitle, Paragraph, Button } from '../styles';

const SignedIn = props => (
    <div className="large-12">
      <hr className="bm-40" />
      <SmallTitle className="tm-40">MINA INSTÄLLNINGAR</SmallTitle>
      <Paragraph>Här kommer du åt snabblänkar till att ändra dina uppgifter.<br/> Något annat som du vill ändra? Kontakta oss till info@idrottskoll.se</Paragraph>
      <div>
        <Button className="rm-20">Ändra kontaktuppgifter</Button>
        <Button>Byt lösenord</Button>
      </div>
      <SmallTitle className="tm-80">MINA VIDEOS</SmallTitle>
      <div className="row">
        <div className="large-4 rp-20">
          <img className="usp-img" src={require('../../images/film-placeholder.png')} alt="Min film"/>
          <SmallTitle>Kaninkuppen 2018</SmallTitle>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu luctus risus, blandit mattis elit. </Paragraph>
        </div>
        <div className="large-4 rp-20">
          <img className="usp-img" src={require('../../images/film-placeholder.png')} alt="Min film"/>
          <SmallTitle>Kaninkuppen 2018</SmallTitle>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu luctus risus, blandit mattis elit. </Paragraph>
        </div>
        <div className="large-4 rp-20">
          <img className="usp-img" src={require('../../images/film-placeholder.png')} alt="Min film"/>
          <SmallTitle>Kaninkuppen 2018</SmallTitle>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu luctus risus, blandit mattis elit. </Paragraph>
        </div>
      </div>
    </div>

);

export default SignedIn;
