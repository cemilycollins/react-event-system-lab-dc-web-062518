// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {

  render() {
    return(<button type="password" onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}/>)
  }
}
