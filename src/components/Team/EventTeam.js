import React, {Component} from 'react';
import EventTeamItem from './EventTeamItem';
import Slider from 'react-slick';

class EventTeam extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        return(
            <section className="event_team_area sec_pad">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s"><span>Спикеры</span></h2>
                </div>
                <Slider ref={c => (this.slider = c)} className="event_team_slider" {...settings}>
                    <EventTeamItem image="team1.jpg" name="Ольга Афанасьева" post="Исполнительный директор Украинской ассоциации венчурного и частного капитала, сооснователь VC ChatrOOm"/>
                    <EventTeamItem image="team2.jpg" name="Мурат Абдрахманов" post="Венчурный инвестор и бизнес-ангел"/>
                    <EventTeamItem image="team3.jpg" name="Ануар Сейфуллин" post="Инвестиционный директор венчурного фонда Quest Ventures"/>
                    <EventTeamItem image="team1.jpg" name="Елена Седых" post="Серийный предприниматель, инвестор, со-основатель Dogovor24
"/>
                    <EventTeamItem image="team2.jpg" name="Вера Футорянски" post="Основатель и СЕО Veritas Ventures"/>
                </Slider>
            </div>
        </section>
        )
    }
}

export default EventTeam;