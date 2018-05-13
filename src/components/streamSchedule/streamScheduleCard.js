import React from 'react';
import { SmallTitle } from '../styles';

export const StreamScheduleCard = props => (
    <div style={styles.container}>
        <div style={styles.wrapper}>PLAY</div>
        <SmallTitle>{props.title}</SmallTitle>
    </div>
);

const styles = {
    container: {
        margin: '10px',
        height: '250px',
        backgroundColor: '#ffffff',
        border: '1px solid #000000',
        width: '100%'
    },
    wrapper: {
        backgroundColor: '#000000',
        margin: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '230px',
        color: '#ffffff'
    }
};
