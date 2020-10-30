import React, {Component} from 'react';

class ErpanalyticsItem extends Component {
    render(){
        let {title, text} = this.props;
        return(
            <div className="col-md-4">
                <div className="erp_analytics_item text-center">
                    <h3 style={{color: `#4e78f3`}}>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}
export default ErpanalyticsItem;