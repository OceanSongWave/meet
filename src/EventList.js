import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
  render() {
    return (
      <ul className='EventList'>
        {this.props.events.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}

// class EventList extends Component {
//   render() {
//     const { events } = this.props;
//     return (
//       <ul className="EventList">
//         {events.map(event =>
//         <li key={event.id}>
//           <Event event={event} />
//         </li>
//       )}
//       </ul>
//     );
//   }
// }

export default EventList;
