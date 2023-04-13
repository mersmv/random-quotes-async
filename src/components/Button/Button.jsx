import { Styledbutton, StyledIcon } from "./styles"

const Button = ({setButton}) => {
    return (
        <Styledbutton onClick={() => setButton(true)}>
            <StyledIcon src="../../public/images/icon-dice.svg"/>
        </Styledbutton>
    )
}

export default Button