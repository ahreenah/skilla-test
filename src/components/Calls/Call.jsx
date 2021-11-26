import Outcoming from '../../images/outcoming.svg'
import Incoming from '../../images/incoming.svg'
import OutNoTake from '../../images/outnotake.svg'
import InNoTake from '../../images/innotake.svg'
export default function Call({data}){
    console.log('call', data.in_out)
    let date = new Date(data.date);
    return <tr>
        <td>
            <img src={data.in_out==1?(
                data.status=="Не дозвонился"?InNoTake:Incoming):(
                data.status=="Не дозвонился"?OutNoTake:Outcoming)}/>
        </td>
        <td>{date.getHours()}:{date.getMinutes()}</td>
        <td><img src={data.person_avatar}></img></td>
        <td>{data.contact_name?data.contact_name:data.to_number}<br/>{data.contact_company}</td>
        <td>{data.contact_company}</td>
        <td>Скрипт не использован</td>
        <td>{Math.trunc(data.time/60)}:{data.time%60}</td>
    </tr>
}