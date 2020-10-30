import { MessageBox } from 'react-chat-elements';
import { ChatItem, MessageList, ChatList } from 'react-chat-elements'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'

function Chat(props) {
    const [chats, setChats] = useState([
        { 
            avatar: 'https://facebook.github.io/react/img/logo.svg',         
            title: 'Админ',
            subtitle: 'Привет',
            date: new Date(),
            unread: 0,
        },
    ])
    const handleClick = e => {
        props.history.push(`/dashboard/message/${e.chattingUserId}`)
    }
    // useEffect(() => {
    //     axios.get('http://10.110.160.50:8008/api/chat?userId=29&secondId=1').then(res => setChats(
    //         res.data.map((item) =>  {
    //          return  {
    //                 text: item.message, 
    //                 chattingUserId: item.chattingUserId,
    //                 userId: item.userId,
    //                 position: item.position
    //             }
    //     })
    //     )).catch(err => err)
    // }, [])
    return(
        <ChatList
            className='message-list'
            lockable={true}
            onClick={handleClick}
            toBottomHeight={'100%'}
            dataSource={chats} />
    )
}

export default (withRouter(Chat));