import React from 'react';

export default class Tabs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  render () {
    return (
      <article>
        <ul>
          {
            this.props.tabs.map ( (prop) => {
                return <h1>{prop.title}</h1>;
              }
            )
          }
        </ul>

      </article>
    );
  }
}