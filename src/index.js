import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Typography from '@material-ui/core/Typography';

class App extends Component {


  componentDidMount(){

  }



render() {

  return (

    <Typography  align="center" variant="overline" gutterBottom   classes={{
    root: 'classes-state-heading test isgradplain', }
   }>
      Cute Weather App
    </Typography>

)
}

}

ReactDOM.render(<App />, document.getElementById('root'));
