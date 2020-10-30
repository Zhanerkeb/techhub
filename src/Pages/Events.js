import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import EventBanner from "../components/Banner/EventBanner";
import EventCount from "../components/Service/Sservice/EventCount";
import EventAbout from "../components/About/EventAbout";
import EventTeam from "../components/Team/EventTeam";
import EventFeatures from "../components/Features/EventFeatures";
import EventDetails from "../components/Features/EventDetails";
import ScheduleTab from "../components/scheduleTab";
import EventPrice from "../components/EventPrice";
import EventFact from "../components/EventFact";
import Eventgallery from "../components/Portfolios/Eventgallery";
import EventSponser from "../components/EventSponser";
import EventLocation from "../components/EventLocation";
import FooterErp from "../components/Footer/FooterErp";
import FooterData from "../components/Footer/FooterData";
import ServiceSubscribe from "../components/ServiceSubscribe";

const Events = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        mClass="menu_four hosting_menu"
        nClass="w_menu m-auto"
        slogo="sticky_logo"
        hbtnClass="event_btn"
      />
      <EventBanner title={'Программа школа инвестора'} />
      <EventCount />
      {/* <EventAbout /> */}
      <EventTeam />
      {/* <EventFeatures />
      <EventDetails /> */}
      {/* <ScheduleTab />
      <EventPrice /> */}
      <EventFact />
     
      <Eventgallery />
     
      {/* <EventSponser />
      <EventLocation /> */}
     {/* <ServiceSubscribe/> */}
     <iframe src="https://hub.tsd.kz/index.php?module=ext/public/form&id=5" width="100%" height="1000"  frameborder="0" scrolling="auto" onLoad="window.scrollTo(0, 0)"></iframe>
      {/* <FooterErp fClass="event_footer_area" FooterData={FooterData} /> */}
    </div>
  );
};
export default Events;
