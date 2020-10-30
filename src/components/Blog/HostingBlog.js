import React from 'react';
import Sectitle from '../Title/Sectitle';
import HostingBlogItems from '../Blog/HostingBlogItems';
const HostingBlog =()=> {
    return(
        <section className="h_blog_area sec_pad">
            <div className="container">
                {/* <Sectitle Title="" TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!" sClass="hosting_title text-center"/> */}
                <div className="row">
                    <HostingBlogItems blogImage="h_blog1.jpg" blogTitle="Прием заявок на программу развития региональных партнеров с 4 мая по 24 мая" pDate="Октябрь 20, 2020" comments=""/>
                    <HostingBlogItems blogImage="h_blog2.jpg" blogTitle="Качаем регионы: возможности для развития областных технопарков" pDate="Октябрь 22, 2020" comments=""/>
                </div>
            </div>
        </section>
    )
}

export default HostingBlog;