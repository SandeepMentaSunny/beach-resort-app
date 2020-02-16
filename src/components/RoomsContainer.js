// import React from 'react';

// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import Loading from './Loading';
// import { RoomConsumer } from '../Context';

// export default function RoomContainer(){
//     return(
//         <RoomConsumer>
//         {
//             (value) => {
//                 const { loading, sortedRooms, rooms } = value;
//                 if(loading){
//                     return <Loading />
//                 }
//                 return (
//                     <div>
//                         hello from rooms container
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms}/>
//                     </div>
//                 );
//             }
//         }
//         </RoomConsumer>
//     )
// }


import React from 'react';

import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';
import { withRoomConsumer } from '../Context';

function RoomContainer({ context }){
    const { loading, sortedRooms, rooms } = context;
    if(loading){
        return(<Loading />)
    }
    return (
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
    )
}

export default withRoomConsumer(RoomContainer);