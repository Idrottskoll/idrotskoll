import styled from 'styled-components';

export const Button = styled.button`
    background: white;
    border: 1px solid #202020;
    color: #202020;
    font-size: 18px;
    font-family: 'Renner-Medium';
    padding: 15px 27px 15px 27px;
    transition: all 0.3s;
    &:hover {
        background: #202020;
        color: white;
    }
`;

export const Label = styled.label`
    font-size: 18px;
    font-family: 'Renner-Book';
    color: #202020;
    line-height: 23px;
    width: 100%;
`;

export const Input = styled.input`
    font-size: 18px;
    font-family: 'Renner-Book';
    border: 1px solid #202020;
    height: 48px;
    padding-left: 20px;
    padding-right: 20px;
    transition: all 0.3s;
    width: 100%;
    margin-bottom: 20px;
    &:focus {
        outline: none;
        border: 1px solid blue;
        box-shadow: none;
    }
    &::placeholder {
        color: #7d7d7d;
    }
`;

export const TextArea = styled.textarea`
    font-size: 18px;
    font-family: 'Renner-Book';
    border: 1px solid #202020;
    padding: 20px;
    transition: all 0.3s;
    width: 100%;
    &:focus {
        outline: none;
        border: 1px solid blue;
        box-shadow: none;
    }
    &::placeholder {
        color: #7d7d7d;
    }
`;

export const Title = styled.h1`
    font-family: 'Renner-Book';
    font-size: 48px;
    font-weight: 100;
`;

export const Paragraph = styled.p`
    font-family: 'Renner-Book';
    font-size: 18px;
    line-height: 23px;
`;

export const Link = styled.a`
    font-family: 'Renner-Book';
    font-size: 18px;
    text-decoration: underline;
    transition: all 0.3s;
    color: black;
    display: block;
    &:hover {
        color: blue;
        cursor: pointer;
    }
`;

export const SmallTitle = styled.h2`
    font-family: 'Renner-Book';
    font-size: 18px;
    text-transform: uppercase;
`;

{
    /* <Button>Button</Button> <br />
<br />
<Label>Label</Label> <br />
<br />
<Input placeholder="Placeholder" /> <br />
<br />
<TextArea placeholder="Placeholder" /> <br />
<br />
<Title>Title</Title>
<Paragraph>Paragraph</Paragraph>
<Link>Link</Link>
<SmallTitle>Small title</SmallTitle> */
}
