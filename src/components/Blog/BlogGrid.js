import React, {useState, useEffect} from 'react';
import Blogrightsidebar from './Blogrightsidebar';
import BlogGridItem from './BlogGridItem';
import ServiceData from '../Service/ServiceData';
import axios from 'axios';

const BlogGrid =()=>{
    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get('http://10.110.160.50:8008/api/news').then(res => setNews(res.data)).catch(err => err)
    }, [])

    const newsItems = news.map((item, i) => 
        <BlogGridItem key={i} date="14" month="jan" image={`https://hub.tsd.kz/uploads/attachments/${new Date(item.date_updated * 1000).getFullYear()}/${new Date(item.date_updated * 1000).getMonth() + 1}/${new Date(item.date_updated * 1000).getDate()}/${item.imageUrl}`} Title={item.title} description={item.description}
        btn="Подробнее" comment="3"/>
    )

    return(
        <section style={{width: '100%'}} className="blog_area_two sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 blog_grid_info">
                        <div className="row">
                            {newsItems}
                        </div>
                        {/* <ul className="list-unstyled page-numbers shop_page_number text-left mt_30">
                            <li><span aria-current="page" className="page-numbers current">1</span></li>
                            <li><a className="page-numbers" href=".#">2</a></li>
                            <li><a className="next page-numbers" href=".#"><i className="ti-arrow-right"></i></a></li>
                        </ul> */}
                    </div>
                    {/* <div className="col-lg-4">
                        <Blogrightsidebar ServiceData={ServiceData}/>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
export default BlogGrid;