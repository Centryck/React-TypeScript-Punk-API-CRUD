import { getBeersEndpoint } from "../endpoint/get-beers.endpoint";
import { mapBeerFromPunkBreweryApi } from "../mapper/mapBeerFromPunkBreweryApi";
import { Beer } from "../model";

type GetBeers = () => Promise<Beer[]>;

export const getBeersFromPunkBrewery: GetBeers = async () => {
	try {
		return await getBeersEndpoint().then((data) => {
			return data.map(mapBeerFromPunkBreweryApi);
		})
	}
	catch (err) {
		console.log(err);
		return [];
	}
}

export const getBeersFromSessionStorage: GetBeers = () => {
	return Promise.resolve(JSON.parse(sessionStorage.getItem("beers")!));
}