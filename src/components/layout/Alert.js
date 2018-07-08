import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../styles.js';

export const messageType = { error: 0, success: 1, alert: 2, info: 3 };

const AlertBox = `
    height: 48px;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-family: 'Renner-Medium';
`;

const AlertSuccess = styled.div`
    ${AlertBox};
    background-color: #80c38f;
`;

const AlertInfo = styled.div`
    ${AlertBox};
    background-color: #012e40;
`;

const AlertError = styled.div`
    ${AlertBox};
    background-color: #dc5960;
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

const Alert = props => <React.Fragment>{renderAlert(props.message, props.type)}</React.Fragment>;

export default Alert;
