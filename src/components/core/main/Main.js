import React from "react";
import DataTable from "../../ui/dataTable/DataTable";
import _ from 'lodash';

const Main = () => {
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

	function processRecords(apiData) {
		console.log('apiData');
		console.log(apiData['tournament_1']);
			return apiData['tournament_1'].map(listOfMatches => {
				return listOfMatches = {
					time: `${_.get(listOfMatches, 'time.time')} - ${_.get(listOfMatches, 'time.date')}`,
					homeTeam: `${_.get(listOfMatches, 'teams.home')}`,
					result: `${_.get(listOfMatches, 'result.home')} -  ${_.get(listOfMatches, 'result.away')}`,
					awayTeam: `${_.get(listOfMatches, 'teams.away')}`,
					events: _.get(listOfMatches, 'events')
				}
			});
	}
	const processedRecords = processRecords(data);
	return (
		<div>
			<DataTable columnList={columns} data={processedRecords} />
		</div>
	);
};

export default Main;