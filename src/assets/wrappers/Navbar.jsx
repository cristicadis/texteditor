import styled from 'styled-components';

const Wrapper = styled.nav`
    background-color: #F8F9FA;
    width: 100%;
    border: 1px solid #dee2e6;
    .active {
        color:black; 
        
    }
     a {
        color: #565757;
     }
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.6rem;
        a {
            color: #000000;
            text-decoration: none;
            text-transform: capitalize;
            font-size: 1.3rem;
            font-weight: 300;
        }
        button {
            border-radius:8px;
            border: 1px solid #d3d9de;
            background: none;
            display: flex;
            cursor: pointer;
            outline:none;
            text-decoration: none;
            transition:.2s ease-in-out all ;
        }
        button:hover,
        button:active
         {  border: none;
            border: 1px solid #d3d9de;
            box-shadow:0 0 0 0.25rem #575757;
        }
        
         
        svg {
           
            
            padding: 0.2rem .5rem;
            width: 50px;
        }
    }
    
    .links-container {
        overflow: hidden;
        transition: .3s ease-in-out all;
       
       .nav-link { 
            text-decoration: none;
            font-weight: 400;
            letter-spacing: 0.1rem;
            
            display: block;
            padding:0.5rem 1rem;
            transition: .2s ease-in-out all;
        }
        .nav-link:active,
        .nav-link:hover,
        .nav-link:checked{
            
        }
        .darkmode {
            padding:0 1rem;
            color: #565757;
            
        }
    }
`;

export default Wrapper;
