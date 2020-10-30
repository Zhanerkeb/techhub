import React, {useEffect, useState} from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import HRService from '../components/Service/HRService';
import PrototypeService from '../components/Service/Sservice/PrototypeService';
import Partner from '../components/Partner';
import ServiceSubscribe from '../components/ServiceSubscribe';
import FooterTwo from '../components/Footer/FooterTwo';
import ServiceData from '../components/Service/ServiceData';
import FooterData from '../components/Footer/FooterData';
import axios from 'axios';

const Service = () => {
    const [serviceData, setServiceData] = useState([])

    useEffect(() => {
        axios.get('http://10.110.160.50:8008/api/zakups').then(res => setServiceData(res.data)).catch(err => err)
    }, [])
    console.log(serviceData)

    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Закупки" Pdescription=""/>
            <HRService ServiceData={serviceData ? serviceData : []}/>
            {/* <PrototypeService/>
            <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/> */}
            <ServiceSubscribe sClass="s_form_info_two"/>
            {/* <FooterTwo fClass="pt_150" FooterData={FooterData}/> */}
        </div>
    )
}
export default Service;