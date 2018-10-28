import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

const defaults = {
  icon: "CLEAR_DAY",
  color: "goldenrod",
  size: 60,
  animate: true
};

var apiKey = "ae754027ab44ce684e50d36881b26d0f";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
  }

  componentDidMount() {
    var city = "kochi";
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&apiKey=${apiKey}`
      )
      .then(data => {
        console.log(data.data);
      });
    this.setState({ city: city });
  }

  render() {
    return (
      <div>
        <Typography
          align="center"
          variant="overline"
          gutterBottom
          classes={{
            root: "heading test isgradplain"
          }}
        >
          Cute Weather App
        </Typography>
        <div className="weather">
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Typography
                align="center"
                variant="overline"
                gutterBottom
                classes={{
                  root: "city test isgradplain"
                }}
              >
                {this.state.city}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
              />
            </Grid>

            <Grid item xs={2}>
              <Typography
                align="center"
                variant="overline"
                gutterBottom
                classes={{
                  root: "city test isgradplain"
                }}
              >
                Its Looking Hot
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div class="row">
          <Grid container>
            <Grid item xs={4}>
              <Typography
                align="right"
                variant="overline"
                gutterBottom
                classes={{
                  root: "city test isgradplain"
                }}
              >
                Low
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                align="left"
                variant="overline"
                gutterBottom
                classes={{
                  root: "city test isgradplain"
                }}
              >
                24
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                align="right"
                variant="overline"
                gutterBottom
                classes={{
                  root: "city test isgradplain"
                }}
              >
                High
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                align="left"
                variant="overline"
                gutterBottom
                classes={{
                  root: "city test isgradplain"
                }}
              >
                24
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
