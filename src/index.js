import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';


var apiKey = "ae754027ab44ce684e50d36881b26d0f";

class App extends Component {


  componentDidMount(){
    let city = "kochi";
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&apiKey=${apiKey}`)
         .then(data => {
           console.log(data.data);
         }
);
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
