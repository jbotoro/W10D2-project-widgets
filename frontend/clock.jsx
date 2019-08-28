import React from 'react';



class Clock extends React.Component {
  constructor (props) {
    super(props);
    const startTime = new Date();
    this.state = {
      sPh : "",
      mPh : "",
      hPh : "",
      seconds: startTime.getSeconds(),
      minutes: startTime.getMinutes(),
      hours: startTime.getHours()
    };

    this.tickInterval = null;
    


    
  }

  componentDidMount () {
    

    this.tickInterval = setInterval( () => {
      this.tick();
    }, 1000);

    

    
  }

  componentWillUnmount () {
    clearInterval(this.tickInterval);
  }

  tick () {
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;
    let hours = this.state.hours;
    seconds++;
    if (seconds === 60){
      seconds = 0;
      minutes++;
    }
    if (seconds < 10){
      this.setState({
        sPh: 0
      });
    }
    else {
      this.setState({
        sPh: ""
      });
    }
    if (minutes === 60){
      minutes = 0;
      hours++;
    }
    if (minutes < 10) {
      this.setState({
        mPh: 0
      });
    }
    else {
      this.setState({
        mPh: ""
      });
    }
    if (hours === 24){
      hours = 0;
    }
    if (hours < 10) {
      this.setState({
        hPh: 0
      });
    }
    else {
      this.setState({
        hPh: ""
      });
    }
    this.setState({
      seconds: seconds,
      minutes: minutes,
      hours: hours
    });
    
  }

  render () {
    let secondsArr = [];
    for(let i = 0; i < this.state.seconds; i++){
      secondsArr.push('second');
    }

    let minutesArr = [];
    for (let i = 0; i < this.state.minutes; i++) {
      minutesArr.push('minute');
    }

    let hoursArr = [];
    for (let i = 0; i < this.state.hours; i++) {
      hoursArr.push('hour');
    }

    return (
      <div>
        <h1> Clock </h1>
        <div id="clock">
        {this.state.hPh}{this.state.hours}:{this.state.mPh}{this.state.minutes}:{this.state.sPh}{this.state.seconds} 
        </div>
        <div className="column-clock">
          
          <ul>
            {
              hoursArr.map((ele, idx) => {
                return <li key={idx} className="hour"></li>;
              })
            }  
          </ul>
        
          <ul>
            {
              minutesArr.map((ele, idx) => {
                return <li key={idx} className="minute"></li>;
              })
            }
          </ul>
        
          <ul>
            {
              secondsArr.map((ele, idx) => {
                return <li key={idx} className="second"></li>;
              })
            }
          </ul>
             
        </div>
      </div>
    );
  }


}























export default Clock;