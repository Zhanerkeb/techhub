import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Account(props) {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        iin: '',
        email: '',
        rukovoditel: '',
        login: ''
    })
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      };
    const handleOk = e => {
        e.preventDefault()
        console.log(form)
        axios.put('http://10.110.160.50:8008/api/users', form, {headers: headers}).
        then(res => axios.post('http://10.110.160.50:8008/api/users/current', null, {headers: headers}).then(res => setForm(res.data.data))).
        catch(err => err)
    }

    useEffect(() => {
        axios.post('http://10.110.160.50:8008/api/users/current', null, {headers: headers}).then(res => setForm(res.data.data))
    }, [])

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
            <h2 className="f_p f_600 f_size_24 t_color3 mb_40" style={{textAlign: 'center'}}>Личный профиль</h2>
                                <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Имя</label>
                                        <input value={form.firstName} type="text" placeholder="techhub" onChange={onChange} name="firstName"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Фамилия</label>
                                        <input value={form.lastName} type="text" placeholder="techhub" onChange={onChange} name="lastName"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">ИИН</label>
                                        <input value={form.iin} type="text" placeholder="ИИН" onChange={onChange} name="iin"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Руководитель</label>
                                        <input value={form.rukovoditel} type="text" placeholder="Руководитель" onChange={onChange} name="rukovoditel"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email</label>
                                        <input value={form.email} type="text" onChange={onChange} name="email" placeholder="techhub@gmail.com"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Логин</label>
                                        <input value={form.login} type="text" onChange={onChange} name="login" placeholder="Логин"/>
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
                                        <button onClick={handleOk} className="btn_three">Изменить</button>
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

export default Account;