
import styled from "styled-components"

const RoleDice = ({currentDice,roleDie}) => {

    


      

  return (
    <DiceContainer>
       <div className="dice"
       onClick={roleDie}
       >
        <img src={`/images/dice/dice_${currentDice}.png`} alt="random" />
        </div> 
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice



const DiceContainer=styled.div`
margin-top:48px;
    display:flex;
    flex-direction:column;
    
    align-items:center;

    .dice{
        cursor:pointer;
    }

`