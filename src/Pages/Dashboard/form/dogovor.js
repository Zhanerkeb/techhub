import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Dogovor(props) {
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
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
             <iframe width="100%" height="1100px" src="https://hub.tsd.kz/index.php?module=items/info&path=25-1" frameBorder="0"></iframe>
        </div>
    )
}

export default Dogovor;