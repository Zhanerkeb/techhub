import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utils/setAuthToken';

const SignInFrom =(props)=>{
    const [form, setForm] = useState({})
    const handleOk = e => {
        e.preventDefault()
        axios.post('http://10.110.160.50:8008/login', form).then(res => {      
            const {token} = res.data
            console.log(2)
            const decoded = jwt_decode(token)
            setAuthToken(token);
            localStorage.setItem('token', token)
            props.history.push('/dashboard/account')
           
        }
        ).catch(err => err)
    }

    const onChange = e => {
        const {name, value} = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return(
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">
                <div className="sign_info">
                    <div className="row">
                        {/* <div className="col-lg-5">
                            <div className="sign_info_content">
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">First time here?</h3>
                                <h2 className="f_p f_400 f_size_30 mb-30">Join now and get<br/> <span className="f_700">20% OFF</span> for all <br/> products</h2>
                                <ul className="list-unstyled mb-0">
                                    <li><i className="ti-check"></i> Premium Access to all Products</li>
                                    <li><i className="ti-check"></i> Free Testing Tools</li>
                                    <li><i className="ti-check"></i> Unlimited User Accounts</li>
                                </ul>
                                <button type="submit" className="btn_three sign_btn_transparent">Sign Up</button>
                            </div>
                        </div> */}
                        <div className="col-lg-12">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Войти</h2>
                                <form action="/#" className="login-form sign-in-form">
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Логин</label>
                                        <input onChange={onChange} name="login" type="text" placeholder="techhub"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Пароль</label>
                                        <input onChange={onChange} name="password" type="password" placeholder="******"/>
                                    </div>
                                    <div className="extra mb_20">
                                        {/* <div className="checkbox remember">
                                            <label>
                                                <input type="checkbox"/> Keep me Signed in
                                            </label>
                                        </div> */}
                                       
                                        <div className="forgotten-password">
                                            <Link to={'/Signup'}>Зарегистрироваться</Link>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button onClick={handleOk}  className="btn_three">Войти</button>
                                        {/* <div className="social_text d-flex ">
                                            <div className="lead-text">Нет аккаунта?</div>
                                            <ul className="list-unstyled social_tag mb-0">
                                                <li><a href="/#"><i className="ti-facebook"></i></a></li>
                                                <li><a href="/#"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="/#"><i className="ti-google"></i></a></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default withRouter(SignInFrom);