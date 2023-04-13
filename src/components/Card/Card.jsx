import { useEffect, useState } from "react"
import Button from "../Button/Button"
import { StyledAdvice, StyledCard, StyledNumber } from "./styles"

const Card = () => {
const [advice, setAdvice] = useState();
const [button, setButton] = useState(false)
useEffect(() => {
    fetchData('https://api.adviceslip.com/advice', setAdvice, setButton)
},[button])
if(!advice){
    return (<Button setButton={setButton}></Button>)
}
else{
    return (
        <StyledCard>
            <StyledNumber>ADVICE {advice.slip.id}</StyledNumber>
            <StyledAdvice>{advice.slip.advice}</StyledAdvice>
            <img src='../../public/images/pattern-divider-mobile.svg'/>
            <Button setButton={setButton}></Button>
        </StyledCard>
    )
}}

const fetchData = async (url, setAdvice, setButton) => {
    const request = await fetch(url);
    const data = await request.json();
    setAdvice(data)
    setButton(false)
}

export default Card