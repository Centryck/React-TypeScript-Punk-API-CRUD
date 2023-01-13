import { useEffect, useState } from 'react';
import * as BeerActions from '../../beers/use-case';
import { Beer, BeerWithoutId } from "../../beers/model";
import BeerComponent from '../../beers/component/beer-card';
import CreateBeer from '../../beers/component/create-beer-form/create-beer-form';
import Button, { ButtonRole } from '../../base-components/button';
import "./beerPageStyles.css";

const BeerPage = () => {
	const [beersList, setBeersList] = useState<Beer[] | undefined>(undefined);
	const [isCreateBeerVisible, setIsCreateBeerVisible] = useState(false);

	useEffect(() => {
		const storage = sessionStorage.getItem("beers")

		if (storage) {
			setBeersList(JSON.parse(storage));
		}

		else {
			BeerActions.getAllBeers().then((beers) => {
				setBeersList(beers);
				sessionStorage.setItem("beers", JSON.stringify(beers));
			});
		}
	}, []);

	const handleDeleteBeer = async (beerId: number) => {
		const updatedList = await BeerActions.deleteBeer(beerId);
		setBeersList(updatedList);
	}

	const handleUpdateBeer = async (beerId: number, updatedBeer: Beer) => {
		const updatedList = await BeerActions.updateBeer(beerId, updatedBeer);
		setBeersList(updatedList);
	}

	const handleCreateBeer = async (newBeer: BeerWithoutId) => {
		const updatedList = await BeerActions.createBeer(newBeer);
		setBeersList(updatedList);
	}

	return (
		<div className="container">
			<Button name="Add a new beer!" className='createBeerButton' role={ButtonRole.Create} onClick={() => setIsCreateBeerVisible(true)}>Add a new beer!</Button>

			{isCreateBeerVisible && <CreateBeer onSubmit={handleCreateBeer} onCancel={() => setIsCreateBeerVisible(false)} />}

			<div className="beersListContainer">
				{beersList && beersList.map((item) => <BeerComponent beerItem={item} removeBeer={handleDeleteBeer} updateBeer={handleUpdateBeer} key={item.id} />)}
			</div>
		</div>

	)
}

export default BeerPage;