import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import ServiceSubscribe from '../components/ServiceSubscribe'
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
const Process = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Онлайн Наставник" Pdescription="2 месяца непрерывной работы над стартапом с личным наставником"/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require ('../img/home4/divider.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="Оставьте заявку" descriptions="Пройдите регистрацию, заполните анкету, рассказав о своем проекте."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="Поставьте цель на 2 месяца" descriptions="Поставьте основную цель которую вы хотите достигнуть по истечение программы"/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="Начните программу" 
                        descriptions="Оставьте заявку. С вами выйдет на связь ваш наставник для знакомства и первого звонка."/>
                        
                    </div>
                </div>
            </section>
            <ServiceSubscribe />
     </div>
    )
}
export default Process;