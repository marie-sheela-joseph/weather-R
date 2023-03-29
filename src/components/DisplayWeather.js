import './DisplayWeather.css';

function DisplayWeather({ city,
    state,
    country,
    feelsLike,
    humidity,
    temp,
    tempMin,
    tempMax,
    windSpeed,
    sunrise,
    sunset }) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>CITY</th>
                        <td>{city}</td>
                    </tr>
                    <tr>
                        <th>STATE</th>
                        <td>{state}</td>
                    </tr>
                    <tr>
                        <th>COUNTRY</th>
                        <td>{country}</td>
                    </tr>
                    <tr>
                        <th>FEELS LIKE</th>
                        <td>{feelsLike}°</td>
                    </tr>
                    <tr>
                        <th>HUMIDITY</th>
                        <td>{humidity}%</td>
                    </tr>
                    <tr>
                        <th>TEMPERATURE</th>
                        <td>{temp}°</td>
                    </tr>
                    <tr>
                        <th>MINIMUM TEMPERATURE</th>
                        <td>{tempMin}°</td>
                    </tr>
                    <tr>
                        <th>MAXIMUM TEMPERATURE</th>
                        <td>{tempMax}°</td>
                    </tr>
                    <tr>
                        <th>WIND SPEED</th>
                        <td>{windSpeed} km/hr</td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}
export default DisplayWeather;