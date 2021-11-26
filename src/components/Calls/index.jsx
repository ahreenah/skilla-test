import styled from 'styled-components'
import Incoming from '../../images/incoming.svg'
import {useState, useEffect} from 'react'
import CallTable from './CallTable'
let Wrapper  = styled.div`
    background-color:#e5e5e5;
    min-height:100vh;
    flex-grow:1
`;

const InnerWrapper = styled.div`
    max-width:1470px;
    padding-left:10px;padding-right:10px;
    margin:auto;
`

const TableWrapper = styled.div`
    background-color:white;
    border-radius:8px;
    padding-left:41px;
    padding-right:41px;
`


export default function (){
    let [list, setList] = useState([])
    useEffect(()=>{
        fetch('https://api.skilla.ru/mango/getList',{
            method: 'POST',
            headers: {
                'Authorization': 'Bearer qwerty123'
            },
        }).then(async i=>{setList(await i.json())})
    },[])
    return <Wrapper>
        <InnerWrapper>hello
            <CallTable data={list}/>
        </InnerWrapper>
    </Wrapper>
}