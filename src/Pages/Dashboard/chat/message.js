import { MessageList } from 'react-chat-elements'
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Message(props) {
    const [chats, setChats] = useState([])
    // const handleClick = e => {
    //     props.history.push(`/dashboard/message/${e.chattingUserId}`)
    // }
   useEffect(() => {
        axios.get('http://10.110.160.50:8008/api/chat?userId=29&secondId=1').then(res => setChats(
            res.data.map((item) =>  {
             return  {
                    text: item.message,
                    chattingUserId: item.chattingUserId,
                    position: item.position
                }
        })
        )).catch(err => err)
    }, [])
    return(
        <MessageList
            className='message-list'
            lockable={true}
            toBottomHeight={'100%'}
            dataSource={chats} />
    )
}

export default Message