import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMaps from '../components/google_maps';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMaps lon={lon} lat={lat} /></td>
                <td>
                    <Chart height={120} width={180} data={temps} color='red' units='Celsius' />
                </td>
                <td>
                    <Chart height={120} width={180} data={humidities} color='blue' units='%' />
                </td>
                <td>
                    <Chart height={120} width={180} data={pressures} color='orange' units='hPa' />
                </td>
            </tr>
        )
    }

    render() {
        console.log(this.props.weather);
        
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (Celsius)</th>
                        <th>Himidity (%)</th>
                        <th>Pressure (hPa)</th>                        
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

//the above code is similar to this...
// function mapStateToProps(state) {
//     return {
//         weather: state.weather
//      };
// }

export default connect(mapStateToProps)(WeatherList);