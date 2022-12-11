import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const Container = styled.div`
    height: 100%;


`

export const WrapperTabs = styled(Tabs)`
    height: 100%;
    

`

export const WrapperTabList = styled(TabList)`
    padding: 1rem;

    display: flex;
    justify-content: space-around;
    align-items: center;


    span {
        height: 2.5rem;
        border: 1px solid #999999;
    }

    @media (min-width: 481px){
        padding: 1rem 4rem;
    }
`
export const WrapperTab = styled(Tab)`
    list-style: none;
`

export const DescriptionContainer = styled.div`
    height: 81%;
    
    
`

export const WrapperTabPanel = styled(TabPanel)``