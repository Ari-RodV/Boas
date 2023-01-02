import styled from 'styled-components'

const PopupMain = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PopupForm = styled.div`
    background-color: #e9cdb0;
    position: relative;
    width: 600px;
    height: fit-content;
    border-radius: 20px;
    padding: 75px 85px;
    box-shadow: 0px 0px 15px -4px rgba(0,0,0,0.75);

    input {
        background-color: transparent;
        border-radius: 8px;
        width: 100%;
        height: 50px;
        border: 1.2px solid #af9a84;
        margin: 15px 0px;
        padding: 0px 15px;

        &::placeholder {
            font-weight: bold;
            font-size: 0.8em;
            color: #685c4e;
        }
    }
    h1 {
        font-size: 2.5em;
        margin-top: 0;
    }
    label {
        font-size: 1.2em;
    }
    .close {
        position: absolute;
        top: 5px;
        right: 12px;
        font-weight: bold;
        font-size: 1.5em;
        color: darkgray;

        &:hover {
            cursor: pointer;
        }
    }
    button {
        width: 100%;
        background-color: #6a9ed6;
        border-radius: 10px;
        border: 0px;
        height: 40px;
        font-weight: bold;
        color: white;
        margin: 30px 0px;
        transition: 0.2s;

        &:hover {
            transform: scale(1.05);
            background-color: #9bbce0;
            cursor: pointer;
            box-shadow: 0px 0px 15px -3px rgba(43,43,43,0.75);
        }
    }
`

const Background = styled.div`
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
`

export { PopupMain, PopupForm, Background }