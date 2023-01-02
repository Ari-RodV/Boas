import styled from 'styled-components'

const CreateAccount = styled.div`
    width: 100%;
        display: flex;
        justify-content: center;

        > span {
            margin: 0px 5px;
        }
`

const LoginMain = styled.div`
    p, span {
        font-weight: bold;
    }

    .forgot-password {
        text-align: end;
    }
    .green {
        color: green;
        transition: 0.2s;

        &:hover {
            color: white;
            cursor: pointer;
        }
    }
`

export { LoginMain, CreateAccount }