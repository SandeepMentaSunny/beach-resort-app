import React, { Component } from "react";
import { Link } from "react-router-dom";

import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { RoomContext } from "../Context";
import StyledHero from './../components/StyledHero';

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = RoomContext;

  componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [ mainImage, ...defaultImg ] = images; 
    return (
      <>
        <StyledHero img={mainImage}>
            <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
                back to rooms
            </Link>
            </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                {defaultImg.map((image, i) => {
                    return (<img key={i} src={image} alt={name} />)
                })}
            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>price: ₹{price}</h6>
                    <h6>size: {size} SQFT</h6>
                    <h6>max capactiy: {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
                    <h6>{pets ? "pets allowed" : 'no pets allowed'}</h6>
                    <h6>{breakfast && 'free breackfast included'}</h6>
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
            {extras.map((extra, index) => {
                return (<li key={index}>- {extra}</li>)
            })}
            </ul>
        </section>
    </>
    );
  }
}

export default SingleRoom;
