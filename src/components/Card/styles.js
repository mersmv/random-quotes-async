import styled from "styled-components";

const StyledCard = styled.div`
    width: 400px;
    height: 350px;
    background-color: #979797;
    border-radius: 15px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px
`

const StyledNumber = styled.h3`
    color: #53FFAA;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.6rem;
    letter-spacing: 10px;
`

const StyledAdvice = styled.h1`
    color: white;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.3rem;
    text-align: center;
    width: 80%;
`


export {StyledAdvice, StyledCard, StyledNumber}