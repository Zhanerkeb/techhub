import React, {useState} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

const SignUpForm =(props)=>{
    const [form, setForm] = useState({})
    const handleOk = e => {
        e.preventDefault()
        axios.post('http://10.110.160.50:8008/api/users/register', {...form, roleId: 6, isActive: true, rukovoditel: '1'}).
        then(res => props.history.push('/dashboard')).
        catch(err => err)
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
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">Allready have an account?</h3>
                                <h2 className="f_p f_400 f_size_30 mb-30">Login now and<br/> starting using our <br/><span className="f_700">amazing</span> products</h2>
                                <ul className="list-unstyled mb-0">
                                    <li><i className="ti-check"></i> Premium Access to all Products</li>
                                    <li><i className="ti-check"></i> Free Testing Tools</li>
                                    <li><i className="ti-check"></i> Unlimited User Accounts</li>
                                </ul>
                                <button type="submit" className="btn_three sign_btn_transparent">Sign In</button>
                            </div>
                        </div> */}
                        <div className="col-lg-12">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Зарегистрироваться</h2>
                                <form action="#" className="login-form sign-in-form">
                                <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Имя</label>
                                        <input type="text" placeholder="techhub" onChange={onChange} name="firstName"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Фамилия</label>
                                        <input type="text" placeholder="techhub" onChange={onChange} name="lastName"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">ИИН</label>
                                        <input type="text" placeholder="techhub" onChange={onChange} name="iin"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Логин</label>
                                        <input type="text" placeholder="techhub" onChange={onChange} name="login"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email</label>
                                        <input type="text" onChange={onChange} name="email" placeholder="techhub@gmail.com"/>
                                    </div>
                                    {/* <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Телефон</label>
                                        <input type="text" onChange={onChange} name="phoneNumber" placeholder="77777777777"/>
                                    </div> */}
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Пароль</label>
                                        <input type="password" onChange={onChange} name="password"  placeholder="******"/>
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
                                        <button onClick={handleOk} className="btn_three">Зарегистрироваться</button>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default withRouter(SignUpForm);