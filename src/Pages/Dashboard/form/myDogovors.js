import { Table, Tag, Space } from 'antd';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Contracts() {
    const [contracts, setContracts] = useState([])
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      };
    useEffect(() => {
        axios.get('http://10.110.160.50:8008/api/contract', {headers: headers}).then(res => setContracts(res.data))
    }, [])
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
          },
        {
          title: 'Наименование',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
            title: 'Файл',
            dataIndex: 'fileUrl',
            key: 'fileUrl',
            render: text => <a>{text}</a>,
          },
        {
            title: 'Тип контракта',
            dataIndex: 'contractType',
            key: 'contractType',
            render: text => <a>{text}</a>,
        },
      ];
     
    return(
        <Table columns={columns} dataSource={contracts} />
    )
}

export default Contracts

