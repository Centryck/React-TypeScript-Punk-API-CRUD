import { render, fireEvent, screen, act, waitFor } from '@testing-library/react';
import BeerDefaultContent from "./beer-default-content";
import { Beer } from '../../../model';

const BEER_ITEM: Beer = {
	id: 1,
	name: "beer",
	tagline: "tagline",
	description: "description",
	imageUrl: "image",
	alcoholByVolume: 5,
	bitterness: 5,
	ebc: 5,
	srm: 5,
	ph: 5,
}

const REMOVE_BEER = jest.fn();
const UPDATE_BEER = jest.fn();

const renderElement = () => {
	const utils = 	render(<BeerDefaultContent beerItem={BEER_ITEM} onRemoveBeer={REMOVE_BEER} handleEditFields={UPDATE_BEER}/>)

	const query = {
		// Buttons
		editButton: () => screen.queryByText("Edit"),
		removeButton: () => screen.queryByText("Remove"),

		// Beer items
		title: () => screen.queryByText("beer"),
		tagline: () => screen.queryByText("tagline"),
		bitterness: () => screen.queryByText("Bitterness: 5"),
		alcohol: () => screen.queryByText("Alcohol: 5"),
		ebc: () => screen.queryByText("EBC: 5"),
		srm: () => screen.queryByText("SRM: 5"),
		ph: () => screen.queryByText("pH: 5"),
	}

	return {...utils, query}
}

describe(("BeerCard"), () => {
	it("should render by default", () => {
		const { query } = renderElement();

		expect(query.editButton()).not.toBeNull();
		expect(query.removeButton()).not.toBeNull();

		expect(query.title()).not.toBeNull();
		expect(query.tagline()).not.toBeNull();
		expect(query.bitterness()).not.toBeNull();
		expect(query.ebc()).not.toBeNull();
		expect(query.alcohol()).not.toBeNull();
		expect(query.srm()).not.toBeNull();
		expect(query.ph()).not.toBeNull();
	});

	it('should call REMOVE_BEER when remove button is clicked', () => {
		const { query } = renderElement();

		expect(query.removeButton()).not.toBeNull();
		fireEvent.click(query.removeButton()!);

		expect(REMOVE_BEER).toHaveBeenCalledWith(1);
		expect(REMOVE_BEER).toHaveBeenCalledTimes(1);
	});

	it("should call handleEditFields when user clicks edit button", async () => {
		const {query} = renderElement();

		expect(query.editButton()).not.toBeNull();
		fireEvent.click(query.editButton()!);

		await waitFor(() => {
		expect(UPDATE_BEER).toHaveBeenCalled();
		});
	})
})