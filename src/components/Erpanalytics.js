import React from 'react';
import Sectitle from "./Title/Sectitle";
import ErpanalyticsItem from "./ErpanalyticsItem";

const Erpanalytics =()=>{
    return(
        <section className="erp_analytics_area">
            <div className="container">
                <Sectitle Title="Эффект от внедрения" TitleP=""
                 sClass="hosting_title erp_title text-center"/>
                <div className="row">
                    <ErpanalyticsItem title="504 млн.тг." text="Поступление налогов в бюджет"/>
                    <ErpanalyticsItem title="5,3 млрд.тг" text="Экономический эффект на выручку"/>
                    <ErpanalyticsItem title="10% экономия" text="Электроэнергия, эксплуатация и т.п."/>
                </div>
            </div>
        </section>
    )
}
export default Erpanalytics;