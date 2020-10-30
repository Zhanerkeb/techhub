import { Table, Tag, Space } from 'antd';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Zakups() {
    const [contracts, setContracts] = useState([])
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      };
    useEffect(() => {
        axios.get('http://10.110.160.50:8008/api/zakups/applications', {headers: headers}).then(res => setContracts(res.data))
    }, [])
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
          },
        {
          title: 'Компания',
          dataIndex: 'company',
          key: 'company',
          render: text => <a>{text}</a>,
        },
        {
            title: 'Текст',
            dataIndex: 'text',
            key: 'text',
            render: text => <a>{text}</a>,
          },
         
       
      ];
     
    return(
        <Table columns={columns} dataSource={contracts} />
    )
}

export default Zakups

