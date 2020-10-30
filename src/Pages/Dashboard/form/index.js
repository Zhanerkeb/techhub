import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ServiceSubscribe from '../../../components/ServiceSubscribe';

function Form(props) {
    
    const [form, setForm] = useState({})
  
    useEffect(() => {
        axios.get('http://10.110.160.50:8008/api/users/current').then(res => console.log(res.data))
    })

    const onChange = e => {
        const {name, value} = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        
        // <div style={{display: 'flex', justifyContent: 'center'}}>
            <ServiceSubscribe/>
        // </div>
    )
}

export default Form;