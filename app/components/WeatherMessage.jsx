var React = require('react');

var WeatherMessage = ({location, temp}) => {
    return (<h3> Weather of {location} is {temp}. </h3>);
}

module.exports = WeatherMessage;