import React from 'react';

import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}
export default function RoomsFilter({ rooms }){
    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;
    let types = getUnique(rooms, 'type');
    let capacities = getUnique(rooms, 'capacity');
    types = ['all', ...types];
    types = types.map((type, i) => {
        return (<option key={i} value={type}>{type}</option>);
    });
    capacities = capacities.map((capacity, index) => <option key={index} value={capacity}>{capacity}</option>)
    return(
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select className="form-control" onChange={handleChange} name="type" id="type" value={type}>
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select className="form-control" onChange={handleChange} name="capacity" id="capacity" value={capacity}>
                        {capacities}
                    </select>
                </div>
                
            </form>
        </section>
    );
}