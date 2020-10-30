import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import TrackingBanner from '../components/Banner/TrackingBanner';
import TrackingActivity from '../components/TrackingActivity';
import TrackingProduct from '../components/Features/TrackingProduct';
import TrackingPrice from '../components/TrackingPrice';
import TrackingGetstarted from '../components/TrackingGetstarted';
import FooterSecurity from "../components/Footer/FooterSecurity";
import FooterData from '../components/Footer/FooterData';
import ServiceSubscribe from '../components/ServiceSubscribe'

const homesupport = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_tracking" nClass="mr-auto" hbtnClass="tracking_btn"/>
            <TrackingBanner/> 
            <TrackingActivity/>
            <ServiceSubscribe/>
            {/* <TrackingProduct/>
            <TrackingPrice/>
            <TrackingGetstarted/>
            <FooterSecurity FooterData={FooterData}/> */}
        </div>
    )
}
export default homesupport;