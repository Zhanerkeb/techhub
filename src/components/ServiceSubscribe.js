import React, {useState, useEffect} from 'react';
import axios from 'axios';

function ServiceSubscribe(props) {
    const [form, setForm] = useState({
       
    })
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      };
    const handleOk = e => {
        e.preventDefault()
        console.log(form)
        axios.post('http://10.110.160.50:8008/api/zakups/application', form, {headers: headers}).
        then(res => res.data).
        catch(err => err)
    }

    

    const onChange = e => {
        const {name, value} = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        
        <div style={{display: 'flex',zIndex: 1, position: 'relative', justifyContent: 'center'}}>
             
            <form style={{width: '40%'}} action="#" className="login-form sign-in-form">
            <h2 className="f_p f_600 f_size_24 t_color3 mb_40" style={{textAlign: 'center'}}>Оставить заявку</h2>
                                <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Компания</label>
                                        <input  type="text" placeholder="techhub" onChange={onChange} name="company"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Текст</label>
                                        <input type="text" placeholder="techhub" onChange={onChange} name="text"/>
                                    </div>
                                
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email</label>
                                        <input  type="text" onChange={onChange} name="email" placeholder="techhub@gmail.com"/>
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

export default ServiceSubscribe;