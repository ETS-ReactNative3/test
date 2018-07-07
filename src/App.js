import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <HelloWorld />
        <SayFullName name="Alex" surname="Pupkin" link="vk.com" />
        <SayFullName name="Ivan" surname="Vasnecov" link="vk.com" />
        <SayFullName name="Oleg" surname="Chebanov" link="vk.com" />
      </div>
    );
  }
}
function HelloWorld() {
  return (
    <h1> Hello World! </h1>
  )
}

function SayFullName(props) {
  return (
      <div>
      <h1> Мое имя {props.name}, фамилия {props.surname}</h1>
      <a href={props.link}> Сcылка на мой профиль </a>
      </div>
  )
}

export default App;
