import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
             
             <iframe src="https://hub.tsd.kz/index.php?module=ext/public/form&id=4" width="100%" height="800"  frameborder="0" scrolling="auto" onLoad="window.scrollTo(0, 0)"></iframe>
        </div>
    )
}

export default Form;