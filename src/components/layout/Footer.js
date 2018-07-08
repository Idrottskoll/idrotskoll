import React from 'react';
import { Link, Paragraph } from '../styles';
import { Seperator } from './../seperator';

const Footer = props => (
    <div>
        <Seperator />
        <div className="row bm-40">
            <div className="large-6">
                <Link className="bm-10" href="/villkor">
                    Terms and conditions
                </Link>
                <Link className="bm-10" href="/sekretesspolicy">
                    Privacy Policies
                </Link>
                <Link className="bm-10" href="https://www.instagram.com/idrottskoll/">
                    F&ouml;lj oss på Instagram
                </Link>
            </div>
            <div className="large-6 text-right">
                <Paragraph>© Idrottskoll 2018</Paragraph>
            </div>
        </div>
    </div>
);

export default Footer;
