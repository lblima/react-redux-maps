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
                    <Chart height={120} width={180} data={temps} color='red' units='K' />
                </td>
                <td>
                    <Chart height={120} width={180} data={humidities} color='blue' units='hPa' />
                </td>
                <td>
                    <Chart height={120} width={180} data={pressures} color='orange' units='%' />
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className='table table-hover'>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Himidity (%)</th>
                </tr>
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