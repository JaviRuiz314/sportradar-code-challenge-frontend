import './Main.css'

import DataTable from "../../ui/dataTable/DataTable";
import Dropdown from "../../ui/dropdown/Dropdown"
import _ from 'lodash';
import { Component } from 'react';


const
	data = {
		'tournament_1': [{
			time: {
				time: '15:00',
				date: '24/05/21'
			},
			teams: {
				away: 'away_team',
				home: 'home_team'
			},
			result: {
				away: 3,
				home: 0
			},
			events: 'hello'
		},
		{
			time: {
				time: '16:00',
				date: '26/05/21'
			},
			teams: {
				away: 'away_team2',
				home: 'home_team2'
			},
			result: {
				away: 3,
				home: 4
			},
			events: 'hello2'
		},
		{
			time: {
				time: '16:00',
				date: '26/05/21'
			},
			teams: {
				away: 'away_team2',
				home: 'home_team2'
			},
			result: {
				away: 3,
				home: 4
			},
			events: 'hello2'
		},
		{
			time: {
				time: '16:00',
				date: '26/05/21'
			},
			teams: {
				away: 'away_team2',
				home: 'home_team2'
			},
			result: {
				away: 3,
				home: 4
			},
			events: 'hello2'
		}],
		'tournament_2': [{
			time: {
				time: '16:00',
				date: '26/05/21'
			},
			teams: {
				away: 'away_team2',
				home: 'home_team2'
			},
			result: {
				away: 3,
				home: 4
			},
			events: 'hello2'
		}],
		'tournament_3': [{
			time: {
				time: '20:00',
				date: '30/05/21'
			},
			teams: {
				away: 'away_team3',
				home: 'home_team3'
			},
			result: {
				away: 3,
				home: 10
			},
			events: 'hello3'
		}]
	},
	columns = [
		{
			label: 'time',
			name: 'Time'
		},
		{
			label: 'homeTeam',
			name: 'Home'
		},
		{
			label: 'result',
			name: ''
		},
		{
			label: 'awayTeam',
			name: 'Away'
		},
		{
			label: 'events',
			name: 'Events'
		}
	];

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data,
			dropDownSelection: 'tournament'
		}
	}

	processRecords() {
		const defaultOption = this.state.data[Object.keys(this.state.data)[0]];
		let list = [];
		if(this.state.dropDownSelection === 'tournament'){
			list = defaultOption
		} else {
			list = this.state.data[this.state.dropDownSelection];
		}
		return list.map(listOfMatches => {
			return listOfMatches = {
				time: `${_.get(listOfMatches, 'time.time')} - ${_.get(listOfMatches, 'time.date')}`,
				homeTeam: `${_.get(listOfMatches, 'teams.home')}`,
				result: `${_.get(listOfMatches, 'result.home')} -  ${_.get(listOfMatches, 'result.away')}`,
				awayTeam: `${_.get(listOfMatches, 'teams.away')}`,
				events: _.get(listOfMatches, 'events')
			}
		});
	}

	handleDropdownCallback = (value) => this.setState({ dropDownSelection: value });

	render() {
		const processRecords = this.processRecords();
		return (
			<div className="container-fluid main">
				<div className='row justify-content-center'>
					<div>
						<div className='mt-3 d-flex justify-content-center'>
							<Dropdown title={this.state.dropDownSelection} options={Object.keys(this.state.data)} handleDropdownClick={this.handleDropdownCallback} />
						</div>
						<div className='mt-3 d-flex justify-content-center'>
							<DataTable columnList={columns} data={processRecords} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;