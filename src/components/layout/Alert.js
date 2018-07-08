import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../styles.js';

export const messageType = { error: 0, success: 1, alert: 2, info: 3 };

const AlertSuccess = styled.div`
    width: 100%;
    height: 48px;
    padding-left: 40px;
    padding-right: 40px;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #80c38f;
    color: #ffffff;
    font-family: 'Renner-Medium';
`;

const AlertInfo = styled.div`
    width: 100%;
    height: 48px;
    padding-left: 40px;
    padding-right: 40px;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #012e40;
    color: #ffffff;
    font-family: 'Renner-Medium';
`;

const AlertError = styled.div`
    width: 100%;
    height: 48px;
    padding-left: 40px;
    padding-right: 40px;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dc5960;
    color: #ffffff;
    font-family: 'Renner-Medium';
`;

function renderAlert(message, type) {
    if (messageType.error === type) {
        return (
            <AlertError>
                <Paragraph>{message}</Paragraph>
            </AlertError>
        );
    } else if (messageType.info === type) {
        return (
            <AlertInfo>
                <Paragraph>{message}</Paragraph>
            </AlertInfo>
        );
    } else if (messageType.success === type) {
        return (
            <AlertSuccess>
                <Paragraph>{message}</Paragraph>
            </AlertSuccess>
        );
    } else {
        return (
            <AlertInfo>
                <Paragraph>{message}</Paragraph>
            </AlertInfo>
        );
    }
}

// TODO: Make styles reusable

const Alert = props => <React.Fragment>{renderAlert(props.message, props.type)}</React.Fragment>;

export default Alert;
