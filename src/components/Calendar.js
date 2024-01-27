import React from 'react';

export function Calendar(props) {
  return (
    <div id="calendar">
        <h4>Calendar</h4>
        {props.reservations.map(r => {
          return <div key={r.name}>{r.name} has a reservation on {r.day} @ {r.time}</div>
        })}
    </div>
  )
}
