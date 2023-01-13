import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import BeerCard from "./";
import { Beer } from '../../model';

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
	const utils = 	render(<BeerCard beerItem={BEER_ITEM} removeBeer={REMOVE_BEER} updateBeer={UPDATE_BEER}/>)

	const query = {
		// Buttons
		editButton: () => screen.queryByText("Edit"),
		removeButton: () => screen.queryByText("Remove"),
		cancelButton: () => screen.queryByText("Cancel"),
		confirmButton: () => screen.queryByText("Confirm"),

		// Beer items
		img: () => screen.queryByTestId("beer-img"),
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
		expect(query.cancelButton()).toBeNull();

		expect(query.img()).not.toBeNull();
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

	it('should change between states', async () => {
		const {query} = renderElement();

		expect(query.editButton()).not.toBeNull();
		fireEvent.click(query.editButton()!);

		await waitFor(() => {
			expect(query.cancelButton()).not.toBeNull();
		});
		
		expect(query.editButton()).toBeNull();

		fireEvent.click(query.cancelButton()!);

		await waitFor(() => {
			expect(query.editButton()).not.toBeNull();
		});

		expect(query.cancelButton()).toBeNull();
	});

	it("should call onSubmit when user confirm changes", async () => {
		const {query} = renderElement();

		expect(query.editButton()).not.toBeNull();
		fireEvent.click(query.editButton()!);

		await waitFor(() => {
			expect(query.confirmButton()).not.toBeNull();
		});
		
		expect(query.editButton()).toBeNull();

		fireEvent.click(query.confirmButton()!);

		await waitFor(() => {
			expect(query.editButton()).not.toBeNull();
		});

		expect(query.confirmButton()).toBeNull();
		expect(UPDATE_BEER).toHaveBeenCalled();
	})
})