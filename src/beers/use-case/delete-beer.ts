import { Beer } from "../model";
import { getBeersFromSessionStorage } from "../service";

export const deleteBeer = async (id: number) => {
	const currentBeers = await getBeersFromSessionStorage();
	const updatedBeers = currentBeers.filter((item: Beer) => item.id !== id);
	sessionStorage.setItem("beers", JSON.stringify(updatedBeers));
	
	return updatedBeers; 
}