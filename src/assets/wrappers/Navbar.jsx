import styled from 'styled-components';

const Wrapper = styled.nav`
    //background-color: 
    width: 100%;
    border: 1px solid #dee2e6;
    .bg-dark {
        opacity: 1;
        background-color: #212529;
    }
    .bg-light {
        transition:.2s ease-in-out all ;
        opacity: 1;
        background-color: #F8F9FA;
    }
    .border-light {
        transition:.2s ease-in-out all ;
        border: 1px solid #d3d5d5;
    }
    .border-dark {
        border:1px solid rgba(255, 255, 255, 0.1);
    }
    .font-dark {
        transition:.2s ease-in-out all ;
        color: #fff;
    }
    .font-light{
        color:#565757;
    }
   
    .font-light-nav {
        transition:.2s ease-in-out all ;
        color: #000000;
         
        
    }
    .font-dark-nav{
        color:#c8c8c9;
    }
    .font-dark-nav.active {
        color: #fff;
    }
    .font-light-nav.active {
        color:#000;
        font-weight: 500;
        
    }
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
            
            text-decoration: none;
            text-transform: capitalize;
            font-size: 1.3rem;
            
        }
        button {
            border-radius:8px;
            
            background: none;
            display: flex;
            cursor: pointer;
            outline:none;
            text-decoration: none;
            
        }
        button:hover,
        button:active
         {  border: none;
            border: 1px solid #d3d9de;
            box-shadow:0 0 0 0.25rem #575757;
        }
        .svg-dark {
            color: #9b9d9e;
;
        }
        .svg-light {
            color: black;
            transition:.2s ease-in-out all ;
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
            transition: .2s ease-in-out all;
            color: #565757;
            transition: .2s ease-in-out all;
            padding:0 1rem;
        }
        .darkmode-dark {      
            color: white;  
        }
    }
`;

export default Wrapper;
