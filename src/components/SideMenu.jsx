import {Button} from 'react-bootstrap'
import Logo from '../images/logo.svg';
import styled from 'styled-components'
import CallIcon from '../images/call.svg'; 
import Result from '../images/result.svg';
import Orders from '../images/orders.svg';
import Messages from '../images/messages.svg';
import People from '../images/people.svg';
import Documents from '../images/documents.svg';
import Man from '../images/man.svg';
import Case from '../images/case.svg';
import KnowledgeBase from '../images/knowledgeBase.svg';
import Settings from '../images/settings.svg';
import AddIcon from '../images/add.svg';
import Info from '../images/info.svg';

let StyledLink = styled.div`
    display:flex;
    flex-direction:row;
`

let LinkText = styled.div`
    padding-top:15px; 
    padding-bottom:17px;
    font-size:16px;
    line-height:20px;
    text-align:left;
    color:white;
    opacity:60%;
`

let Menu = styled.div`
    float:left;
    width:240px;
    background-color:#091336;
    height:100vh;
    padding-top:20px;
    display:flex;
    flex-direction:column;
    position:sticky;
    top:0;
`

let StyledButton = styled(Button)`
display:flex; flex-direction:row; width:calc(100%  - 40px); padding:13px; 
margin-left:auto;margin-right:auto;margin-bottom:30px;
    >:first-child{
        flex-grow:1
    }
    >:last-child{
        margin-right:10px;
    };
}
`

function Link({name, logo, active}){
    return (<StyledLink style={active&&{backgroundColor:'rgba(216, 228, 251, 0.32)'}}>
                <div style={{width:48, display:'flex'}}>
                    <img src={logo} alt="" style={{margin:'auto'}}/>
                </div>
                <LinkText>
                    {name}
                </LinkText>
            </StyledLink>)
}

function ImageButton({text, icon}){
    return (<StyledButton>
        <div>{text}</div>
        <img src={icon}/>
        </StyledButton>)
}

export default function SideMenu({}){
    return (
    <Menu>
        <img src={Logo} style={{marginRight:'auto', marginBottom:30, marginLeft:12}}/>
        <Link name={'Итоги'} logo={Result}/>
        <Link name={'Заказы'} logo={Orders}/>
        <Link name={'Сообщения'} logo={Messages}/>
        <Link name={'Звонки'} active logo={CallIcon}/>
        <Link name={'Контрагенты'} logo={People}/>
        <Link name={'Документы'} logo={Case}/>
        <Link name={'Исполнители'} logo={Man}/>
        <Link name={'Отчеты'} logo={Case}/>
        <Link name={'База знаний'} logo={KnowledgeBase}/>
        <Link name={'Настройки'} logo={Settings}/>
        <ImageButton text={'Добавить заказ'} icon={AddIcon} />
        <ImageButton text={'Оплата'} icon={Info} />
    </Menu>)
}