import { Beer } from "../model";
import { getBeersFromSessionStorage } from "../service";

export const updateBeer = async (id: number, updatedBeer: Beer) => {
	let currentBeers = await getBeersFromSessionStorage();

	const beerIndex = currentBeers.findIndex((item: Beer) => item.id === id);
	currentBeers[beerIndex] = updatedBeer;

	sessionStorage.setItem("beers", JSON.stringify(currentBeers));

	return currentBeers;
}