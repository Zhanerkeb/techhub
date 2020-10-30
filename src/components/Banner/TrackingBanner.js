import React from 'react';
import TrackingLogo from '../TrackingLogo';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';

const TrackingBanner =()=>{
    return(
        <div>
        <section className="tracking_banner_area text-center">
            <div className="container">
                <div style={{padding: '20px 0'}} className="tracking_banner_content">
                    <h3>Корпоративная акселерация </h3>
                    {/* <p>Track your time and watch your productivity soar!</p> */}
                    {/* <img src={require ("../../img/home-tracking/tracking_banner_img.png")} alt=""/> */}
                </div>
                {/* <TrackingLogo/> */}
            </div>
           
        </section>
         <section className="seo_features_one sec_pad">
         <div className="container">
             <div className="row">
                 <div className="col-lg-6">
                     <div className="seo_features_img seo_features_img_two">
                         <div className="round_circle"></div>
                         <div className="round_circle two"></div>
                         <img src={require('../../img/seo/features_img_two.png')} alt=""/>
                     </div>
                 </div>
                 <div className="col-lg-6 d-flex align-items-center">
                     <Fade bottom cascade>
                         <div className="seo_features_content">
                             <h2 className="wow fadeInUp">Описание</h2>
                             {/* <h6 className="wow fadeInUp">What a plonker bamboozled so I said say what a load of rubbish owt to do with me haggle.</h6> */}
                             <p className="wow fadeInUp">Конкуретноспобосность, экономия или дополнительная прибыль, новый продукт и рынки сбыта - ключевые задачи каждой корпорации. Достичь успеха помогают новые технологии и цифровизация производственных и бизнес-процессов.

Однако, существующие на рынке готовые решения, как правило, дороги и не всегда подходят каждому предприятию с его особенностями и потребностями.

Tech Garden предлагает самый быстрый и гибкий механизм внедрения разработанных именно для вас технологий: корпоративную акселерацию.

</p>
                             <a href=".#" className="seo_btn seo_btn_one btn_hover wow fadeInUp">Подробнее</a>
                         </div>
                     </Fade>
                 </div>
             </div>
         </div>
     </section>
     </div>
    )
}

export default TrackingBanner;