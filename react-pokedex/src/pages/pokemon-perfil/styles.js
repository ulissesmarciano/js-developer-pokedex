import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    
    

`

export const FirstSection =styled.div`

    height: 18rem;
    width: 100%;

    background-color: #49D0B0;

    
`

export const HeadContainer = styled.div`
    margin: 1rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    svg{
        height: 3rem;
        width: auto;

        color: #FFFFFF;
    }

`

export const TitleContainer = styled.div`
    margin: 0 1rem;


    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-size: 1.75rem;
        color: #FFFFFF;
    }

    p {
        font-size: 1rem;

        color: #FFFFFF;
        font-weight: 700;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;

    
    margin-top: 14%;

    img {
        height: 13rem;
        width: auto;
        z-index: 1;

        position: absolute;

        
    }

`
export const CurveSection = styled.div`
    svg{
        width: 100%;
        margin-top: -1rem;
        z-index: -1;
        fill: #49D0B0;

    }
`

export const SecondSection = styled.div`
    width: 100%;
    height: 55%;
    

    
`

export const TypesContainer = styled.div`
    ul {
        margin-top: 4rem;

        display: flex;
        justify-content: space-around;

        list-style: none;

        li {
            padding: 0.1rem 2rem;
            border-radius: 1rem;
            color: #FFFFFF;
            background-color: green;
        }
    }

    @media (min-width: 481px){
        padding: 0 5rem;
    }
`

export const SkillsContainer = styled.div`
    margin: 1rem;
    
    height: 79%;
`