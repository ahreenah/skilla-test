import styled from 'styled-components'
import Call from './Call.jsx'
import Incoming from '../../images/incoming.svg'

const TableWrapper = styled.div`
    background-color:white;
    border-radius:8px;
    padding-left:41px;
    padding-right:41px;
`

const Table = styled.table`
th{
    color:#899CB1;
    line-height:61px;
    font-size:14px;
    font-weight:normal;
}
th, tr:not(:last-child){
    border-bottom:1px solid #EAF0FA
}
td{
    font-size:15px;
    line-height:65px;
}
`


export default function ({data}){
    return <TableWrapper>
                <Table>
                    <colgroup>
                        <col span="1" style={{width: 30}}/>
                        <col span="1" style={{width: 70}}/>
                        <col span="1" style={{width: 130}}/>
                        <col span="1" style={{width: 300}}/>
                        <col span="1" style={{width: 200}}/>
                        <col span="1" style={{width: 800}}/>
                        <col span="1" style={{width: 100}}/>
                    </colgroup>
                    <thead>
                        <tr>
                        <th>Тип</th>
                        <th>Время</th>
                        <th>Сотрудник</th>
                        <th>Звонок</th>
                        <th>Источник</th>
                        <th>Оценка</th>
                        <th>Длительность</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(i=>
                        <Call data={i}/>
                        // <tr>
                        //     <td>
                        //         <img src={Incoming}/>
                        //     </td>
                        //     <td>19:00</td>
                        //     <td><img src="https://lk.skilla.ru/img/noavatar.jpg"></img></td>
                        //     <td>+7 (987) 567-17-12</td>
                        //     <td>Rabota.ru</td>
                        //     <td>Скрипт не использован</td>
                        //     <td>12:06</td>
                        // </tr>
                        )}
                        
                    </tbody>
                </Table>
            </TableWrapper>
}