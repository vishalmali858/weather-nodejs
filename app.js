// console.log("Starting");

// setTimeout(() => {
// 	console.log("execute after 2 seconds");
// }, 2000);

// setTimeout(() => {
// 	console.log("execute after 0 seconds");
// }, 0);
// console.log("Stopping");
const getGeoCodeURL = require("./geocode.js");
const getWeatherInformation = require("./weatherData.js");

if(!process.argv[2]) {
	console.log("No address found");
} else {
	getGeoCodeURL(process.argv[2], (error, dataFetched) => {
		if(error) {
			console.log(error);
		} else {
			const { latitude, longitude, location } = dataFetched;
			getWeatherInformation(latitude + "," + longitude, (error, weatherData) => {
				if(error) {
					console.log(error);
				} else {
					console.log(location +" : " + weatherData);
				}
			});
		}
	});
}