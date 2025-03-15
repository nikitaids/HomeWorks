import React, {useState} from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import down from './down.svg'
import up from './up.svg'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any

export type userType = {
    avatar: string
    name: string
}

export type messageType = {
    text: string,
    time: string
}

export type MessageChatType = {
    id:number,
    user:userType
    message:messageType
}

// структуру объекта не менять
export const message0: MessageChatType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Some Name',  // можно менять
    },
    message: {
        text: 'some text',
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageChatType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Friend Name', // можно менять
    },
    message: {
        text: 'зеркальное сообщение для тренировки css', // можно менять
        time: '22:00', // можно менять
    },
}

const HW1 = () => {
    const [collapsed,setCollapsed] = useState<boolean>(false)

    const collapseCallback = () =>{
        setCollapsed(!collapsed)
    }

    return (
        <>
            <div id={'hw1'}>
                <div className={s2.hwTitle}>Homework #1</div>
                <hr/>
                <div className='requirement'>
                    <ul>
                        <li>* 1 - описать тип MessageType;</li>
                        <li>* 2 - описать тип MessagePropsType в файле Message.tsx;</li>
                        <li>* 3 - в файле Message.tsx отобразить приходящие данные;</li>
                        <li>* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx;</li>
                        <li>* 5 - сделать стили в соответствии с дизайном.</li>
                    </ul>
                    <div className={s2.showResult} onClick={collapseCallback}><img src={collapsed?down:up} alt="show result"/></div>
                </div>
                <div className={!collapsed?s2.hw&&s2.visible:s2.hw}>
                    {/*проверка отображения (не менять)*/}
                    <div>
                        <Message message={message0}/>
                        <FriendMessage message={friendMessage0}/>
                    </div>

                    {/*для автоматической проверки дз (не менять)*/}
                    <MessageSender M={Message}/>
                </div>
            </div>
        </>
    )
}

export default HW1
