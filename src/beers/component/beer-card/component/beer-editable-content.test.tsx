import React from 'react';
import { render, fireEvent, screen, act, waitFor } from '@testing-library/react';
import BeerEditableContent from "./beer-editable-content";
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

const ON_CANCEL = jest.fn();
const ON_SUBMIT = jest.fn();

describe(("BeerCard"), () => {
	it("should render by default", () => {
		render(<BeerEditableContent beerItem={BEER_ITEM} onCancel={ON_CANCEL} onSubmit={ON_SUBMIT} />)

		// Buttons
		const confirmButton = screen.getByText("Confirm");
		const removeButton = screen.queryByText("Remove");
		const cancelButton = screen.getByText("Cancel");

		// Beer items
		const title = screen.getByTestId("beer-name");
		const tagline = screen.getByTestId("beer-tagline");
		const description = screen.getByTestId("beer-description")
		const bitterness = screen.getByTestId("beer-bitterness");
		const alcohol = screen.getByTestId("beer-alcohol");
		const ebc = screen.getByTestId("beer-ebc");
		const srm = screen.getByTestId("beer-srm");
		const ph = screen.getByTestId("beer-ph");

		expect(confirmButton).not.toBeNull();
		expect(cancelButton).not.toBeNull();
		expect(removeButton).toBeNull();

		expect(title).not.toBeNull();
		expect(title).toHaveValue("beer");

		expect(description).not.toBeNull();
		expect(description).toHaveValue("description");

		expect(tagline).not.toBeNull();
		expect(tagline).toHaveValue("tagline");

		expect(bitterness).not.toBeNull();
		expect(bitterness).toHaveValue(5);

		expect(ebc).not.toBeNull();
		expect(ebc).toHaveValue(5);

		expect(alcohol).not.toBeNull();
		expect(alcohol).toHaveValue(5);

		expect(srm).not.toBeNull();
		expect(srm).toHaveValue(5);

		expect(ph).not.toBeNull();
		expect(ph).toHaveValue(5);
	});

	it('should call onCancel when cancel button is clicked', () => {
		render(<BeerEditableContent beerItem={BEER_ITEM} onCancel={ON_CANCEL} onSubmit={ON_SUBMIT} />)

		const cancelButton = screen.getByText("Cancel");

		expect(cancelButton).not.toBeNull();
		fireEvent.click(cancelButton);

		expect(ON_CANCEL).toHaveBeenCalledTimes(1);
	});

	it("should call onSubmit when confirm button is clicked", async () => {
		render(<BeerEditableContent beerItem={BEER_ITEM} onCancel={ON_CANCEL} onSubmit={ON_SUBMIT} />)

		const confirmButton = screen.getByText("Confirm");

		expect(confirmButton).not.toBeNull();

		// eslint-disable-next-line testing-library/no-unnecessary-act
		await act(async () => {
			fireEvent.click(confirmButton);
		});
		expect(ON_SUBMIT).toHaveBeenCalledTimes(1);
	});

	it("allows user to edit the fields", async () => {
		render(<BeerEditableContent beerItem={BEER_ITEM} onCancel={ON_CANCEL} onSubmit={ON_SUBMIT} />)

		const title = screen.getByTestId("beer-name");


		fireEvent.change(title, { target: { value: "new title" } });

		await waitFor(() => {
			expect(title).toHaveValue("new title");
		})
	})
})