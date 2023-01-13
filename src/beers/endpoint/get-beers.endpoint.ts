import { PunkBreweryBeer } from "../mapper/mapBeerFromPunkBreweryApi"

export const getBeersEndpoint = async () => {
	return await fetch("https://api.punkapi.com/v2/beers", {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		}).then((res: Response) => res.json()) as Promise<PunkBreweryBeer[]>
}