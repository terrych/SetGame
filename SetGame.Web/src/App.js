import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css"; 
import { Game } from './Game';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : App.renderGame(this.state.forecasts);

        return (
            <div className="row">
                {contents}
            </div>
        );
    }

    static displayName = App.name;
    
    componentDidMount() {
        this.populateWeatherData();
    }

    static renderGame() {
        return (<Game/>);
    }
    
    static renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    
    async populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
