import styled from "styled-components";

const UserInput = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-color: gray;
    border-radius: 0;
    border-bottom: solid 1px;
    outline: none;
    margin-bottom: 30px;
    width: 70%;

    &:focus {
        border-bottom-color: violet;
    }
`;

export default UserInput;