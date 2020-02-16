import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from './Title';

class Services extends Component{
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free Cocktails',
                info: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
        ]
    }

    render(){
        return(
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((service, index )=> {
                        return (<article key={index} className="service">
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>);
                    })}
                </div>
            </section>
        )
    }
}

export default Services;