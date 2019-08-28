import React from 'react';
import Clock from './clock';
import Tabs from './tabs';


const tabs = [
  {title: 'First', content: "I'm number one" },
  {title: 'Second', content: "I'm number two" },
  {title: 'Third', content: "I'm number three" }
];

export default class Root extends React.Component {
  constructor (props) {
    super(props);
  }

  
   

  render () {
   
    return (
      <div>
        <Clock />
        <Tabs tabs={tabs}/>
      </div>
    );
  }
}