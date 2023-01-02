import styled from 'styled-components'

const HeaderMain = styled.div`
    width: 100%;
    max-width: 1450px;
    padding: 20px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 80px 1fr;
    img {
        width: 80px;
    }
    svg {
        fill: black;
        &:hover {
            cursor: pointer;
        }
    }
    > div {
        display: flex;
        align-items: center;
    }
`

const UserShop = styled.div`
    justify-content: flex-end;
    .user {
        position: relative;
        &:hover {
            .hidden {
                display: block;
            }
        }
        .hidden {
            position: absolute;
            width: 150px;
            height: fit-content;
            right: -50px;
            background-color: #e9cdb0;
            box-shadow: 0px 0px 10px -3px rgba(43,43,43,0.75);
            display: none;
            border-bottom: 3px solid black;

            p {
                padding: 12px 15px;
                font-size: 12px;
                transition: 0.3s;

                &:hover {
                    cursor: pointer;
                    color: rgb(120,120,120);
                }
            }
        }
    }
    svg {
        right: 0;
        margin: 0 10px;
    }
`

const Navigation = styled.div`
    width: fit-content;
    margin: auto;

    li {
        list-style: none;
        display: inline-block;
        padding: 0px 15px 15px 15px;
        transition: 0.1s;
        border-bottom: 3px solid transparent;
        &:hover {
            cursor: pointer;
            border-bottom: 3px solid black;
        }
    }
`

const Promts = styled.div`
    background-color: black;
    height: 35px;
    width: 100%;

    > div {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p {
        color: white;
        font-weight: bold;
        text-align: center;
        font-size: 12px;
    }
`

export { HeaderMain, Navigation, UserShop, Promts }