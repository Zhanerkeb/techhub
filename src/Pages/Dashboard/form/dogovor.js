import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Dogovor(props) {
    const [form, setForm] = useState({})
    const [userId, setUserId] = useState(29)

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      };
      useEffect(() => {
        axios.post('http://10.110.160.50:8008/api/users/current', null, {headers: headers}).then(res => setUserId(res.data.data.id))
    }, [])
       
    const handleOk = (e) => {
        e.preventDefault()
        axios.post('http://10.110.160.50:8008/api/contract', {...form, userId: userId}, {headers: headers}).then(res => console.log(res.data))
    }

    const onChange = e => {
        const {name, value} = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (      
        <div style={{display: 'flex', justifyContent: 'center'}}>      
         <form style={{width: '40%'}} action="#" className="login-form sign-in-form">
             <div className="form-group text_box">

                                        <label className="f_p text_c f_400">Имя</label>
                                        <input  type="text" placeholder="techhub" onChange={onChange} name="name"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Файл</label>
                                        <input type="text" placeholder="techhub" onChange={onChange} name="fileUrl"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Тип контракта</label>
                                        <input  type="text" placeholder="ИИН" onChange={onChange} name="contractType"/>
                                    </div>
                                   
                                    
                                    {/* <div className="extra mb_20">
                                        <div className="checkbox remember">
                                            <label>
                                                <input type="checkbox"/> I agree to terms and conditions of this website
                                            </label>
                                        </div>
                                        
                                        <div className="forgotten-password">
                                            <a href="/#">Forgot Password?</a>
                                        </div>
                                    </div> */}
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button onClick={handleOk} className="btn_three">Отправить</button>
                                        {/* <div className="social_text d-flex ">
                                            <div className="lead-text">Or Sign up Using</div>
                                            <ul className="list-unstyled social_tag mb-0">
                                                <li><a href="/#"><i className="ti-facebook"></i></a></li>
                                                <li><a href="/#"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="/#"><i className="ti-google"></i></a></li>
                                            </ul>
                                        </div> */}
                                   
                                    </div>
                                    </form>     
        </div>
    )
}

export default Dogovor;


