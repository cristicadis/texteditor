import styled from 'styled-components';

const Wrapper = styled.nav`
    background-color: #F8F9FA;
    width: 100%;
    border: 1px solid #dee2e6;
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.6rem;
        a {
            color: rgb(0%,0%,247%);
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
        }
        svg {
           
            
            padding: 0.2rem .5rem;
            width: 50px;
        }
    }
     .show-container {
           height: 10rem;
            
        }
    .links-container {
        height: 0px;
        overflow: hidden;
        transition: .3s ease-in-out all;
       
       .nav-link{
            
            text-decoration: none;
            letter-spacing: 0.1rem;
            color: rgb(0%,0%,9%);
            display: block;
            padding:0.5rem 1rem;
            transition: .3s ease-in-out all;
        }
        .nav-link:active,
        .nav-link:hover {
            color: red;
        }
        .darkmode {
            padding-bottom: 6px;
        }
    }
`;

export default Wrapper;
