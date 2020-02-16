import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from './../components/Services';
import FeaturedRooms from './../components/FeaturedRooms';
import StyledHero from './../components/StyledHero';
export default function Hello(){
    return(
        <Fragment>
            <Hero hero="defaultHero">
                <Banner title='luxurious rooms' subtitle='deluxe rooms starting at Rs.500'>
                    <Link to='/rooms' className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            <StyledHero >Click me</StyledHero>
        </Fragment>
    )
}