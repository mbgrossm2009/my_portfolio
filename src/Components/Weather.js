import React, { Component } from 'react';

class Weather extends Component {
	constructor() {
		super();
		this.state = {
			location: null,
			state: null
		};
	}
	componentDidMount() {
		fetch(
			'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09yY6v1ZKM5DXE1DsColG1grHD2XhDbdLM&q=BOSTON%2CMA&alias=MA'
		)
			.then((results) => {
				return results.json();
			}).then((data) => {
				// let myLocation = data.results.map((location) => {
					this.setState({location : data[0].LocalizedName,
									state: data[2].LocalizedName})
						// <div>location.location</div>
					
			// 	})
					})
			// })
				// 	let myData = data.results.map((data) => {
			// 		return (
			// 			<div>
			// 				<div key={data.results} />
			// 			</div>
			// 		);
			// 	});

			// });
	}


	render() {
		return <h1>{this.state.location}</h1>;
	}
}

export default Weather;
