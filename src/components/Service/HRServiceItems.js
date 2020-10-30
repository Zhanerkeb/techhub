import React, {Component} from 'react';
import Reveal from 'react-reveal'
class HRServiceItems extends Component{
    render(){
        var{HRtitle, HRdescription, Hicon, rclass, iclass, sum} = this.props;
        return(
                <div className="col-lg-4 col-sm-6">
                    <Reveal bottom cascade>
                    <div style={{boxShadow: '0px 0px 10px 3px rgba(189,189,189,1)'}} className={`p_service_item ${rclass}`}>
                        <div >{Hicon}</div>
                        <h5 className="f_600 f_p t_color3">{HRtitle}</h5>
                        <p className="f_400">{HRdescription}</p>
                        <p className="f_400">Сумма: {sum}</p>
                    </div>
                    </Reveal>
                </div>
            
        )
    }
}
export default HRServiceItems;