import { BeerWithoutId } from "../model";
import { getBeersFromSessionStorage } from "../service";

export const createBeer = async (newBeer: BeerWithoutId) => {
	let currentBeers = await getBeersFromSessionStorage();

	const newId: number = currentBeers[currentBeers.length - 1].id + 1;

	const newBeerWithId = {...newBeer, id: newId};
	currentBeers.push(newBeerWithId);

	sessionStorage.setItem("beers", JSON.stringify(currentBeers));

	return currentBeers;
}