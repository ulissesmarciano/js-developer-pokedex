import styled from 'styled-components'

export const Container = styled.div`
    margin: .5rem ;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: .2rem;


    background-color: #CB2743;

    @media (min-width: 480px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`