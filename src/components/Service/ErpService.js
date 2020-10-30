import React from 'react';
import Sectitle from '../Title/Sectitle';
import ErpServiceitem from './ErpServiceitem';

const ErpService =()=> {
    return(
        <section className="erp_service_area sec_pad">
            <div className="container">
                <Sectitle sClass="hosting_title erp_title text-center" Title='Преимущества работы' TitleP=''/>
                <div className="row">
                    {/* <ErpServiceitem itemClass="pr_70" sTitle="Secured Cloud" pText="Bloke fantastic bubble and squeak do one what a plonker nancy boy burke fanny around." icon="erp_icon1.png"/> */}
                    <ErpServiceitem itemClass="pr_70 pl_10" sTitle="" pText="Мониторинг исполнения проектов и четкое соблюдение всех условий договора" icon="erp_icon2.png"/>
                    <ErpServiceitem itemClass="pl_70" sTitle="" pText="Транспарентность в исполнении проектов и расходовании денежных средств" icon="erp_icon3.png"/>
                    {/* <ErpServiceitem itemClass="pr_70" sTitle="Multi Regional" pText="Bloke fantastic bubble and squeak do one what a plonker nancy boy burke fanny around." icon="erp_icon4.png"/> */}
                    <ErpServiceitem itemClass="pl_10" sTitle="" pText="Сокращение срока исполнения до 1 месяца по сравнению с 3-6 месяцами при самостоятельном финансировании НИОКР" icon="erp_icon5.png"/>
                    {/* <ErpServiceitem itemClass="pl_70" sTitle="Works in Web" pText="Bloke fantastic bubble and squeak do one what a plonker nancy boy burke fanny around." icon="erp_icon6.png"/> */}
                </div>
            </div>
        </section>
    )
}

export default ErpService;