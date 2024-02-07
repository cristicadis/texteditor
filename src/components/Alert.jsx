import { useSelector } from "react-redux";
import styled from 'styled-components';


const Alert = (props) => {
    const {alert} = useSelector((state) => state.data)
    
  return (
  <Wrapper>
        <div  style={{height:'11vh'}}>
            { alert && 
            <div className='alert' role="alert">
                <strong style={{textTransform:'capitalize'}}>{alert.type}</strong>: {alert.msg}           
            </div>}
        </div>
  </Wrapper>    
  )
}

export default Alert

const Wrapper = styled.section` 
    width: 100%;   
    div {
        width: 100%;
    }
    .alert {
        padding: 1rem 25px;
        background-color: #d1e7dd;
        color: #0a3622;
        border:1px solid #a3cfbb;
        transition: opacity 7s linear;
    }
`





