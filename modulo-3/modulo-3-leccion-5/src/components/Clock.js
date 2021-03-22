import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props.time};
  }

  updateClock() {

  }

  setInterval(updateClock, 1000);

  render() {
    return (
      <>
        <p>
          It is {this.props.time.hour}:{this.props.time.minute}:
          {this.props.time.second}.
        </p>
      </>
    );
  }
}

// const Clock = (props) => {
//   // const updateClock = () => {

//   //   setState({
//   //     hour: props.date.getHours(),
//   //     minute: props.date.getMinutes(),
//   //     second: props.date.getSeconds(),
//   //   });

//   //   setInterval(updateClock, 1000);

//   return (
//     <>
//       <p>It is {props.date.toLocaleTimeString()}.</p>
//     </>
//   );
// };
// // };

export default Clock;

// hour: date.getHours(),
//       minute: date.getMinutes(),
//       second: date.getSeconds(),
