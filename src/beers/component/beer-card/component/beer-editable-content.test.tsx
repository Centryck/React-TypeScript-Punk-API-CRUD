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

const renderElement = () => {
	const utils = render(<BeerEditableContent beerItem={BEER_ITEM} onCancel={ON_CANCEL} onSubmit={ON_SUBMIT} />)


	const query = {
		// Buttons
		removeButton: () => screen.queryByText("Remove"),
		cancelButton: () => screen.queryByText("Cancel"),
		confirmButton: () => screen.queryByText("Confirm"),

		// Beer items
		img: () => screen.queryByTestId("beer-img"),
		title: () => screen.getByTestId("beer-name"),
		description: () => screen.getByTestId("beer-description"),
		tagline: () => screen.getByTestId("beer-tagline"),
		bitterness: () => screen.getByTestId("beer-bitterness"),
		alcohol: () => screen.getByTestId("beer-alcohol"),
		ebc: () => screen.getByTestId("beer-ebc"),
		srm: () => screen.getByTestId("beer-srm"),
		ph: () => screen.getByTestId("beer-ph"),
	}

	return { ...utils, query }
}

describe(("BeerCard"), () => {
	it("should render by default", () => {
		const { query } = renderElement();

		expect(query.confirmButton()).not.toBeNull();
		expect(query.cancelButton()).not.toBeNull();
		expect(query.removeButton()).toBeNull();

		expect(query.title()).not.toBeNull();
		expect(query.title()).toHaveValue("beer");

		expect(query.description()).not.toBeNull();
		expect(query.description()).toHaveValue("description");

		expect(query.tagline()).not.toBeNull();
		expect(query.tagline()).toHaveValue("tagline");

		expect(query.bitterness()).not.toBeNull();
		expect(query.bitterness()).toHaveValue(5);

		expect(query.ebc()).not.toBeNull();
		expect(query.ebc()).toHaveValue(5);

		expect(query.alcohol()).not.toBeNull();
		expect(query.alcohol()).toHaveValue(5);

		expect(query.srm()).not.toBeNull();
		expect(query.srm()).toHaveValue(5);

		expect(query.ph()).not.toBeNull();
		expect(query.ph()).toHaveValue(5);
	});

	it('should call onCancel when cancel button is clicked', () => {
		const { query } = renderElement();

		expect(query.cancelButton()).not.toBeNull();
		fireEvent.click(query.cancelButton()!);

		expect(ON_CANCEL).toHaveBeenCalledTimes(1);
	});

	it("should call onSubmit when confirm button is clicked", async () => {
		const { query } = renderElement();

		expect(query.confirmButton()).not.toBeNull();

		// eslint-disable-next-line testing-library/no-unnecessary-act
		await act(async () => {
			fireEvent.click(query.confirmButton()!);
		});
		expect(ON_SUBMIT).toHaveBeenCalledTimes(1);
	});

	it("allows user to edit the fields", async () => {
		const { query } = renderElement();

		fireEvent.change(query.title(), { target: { value: "new title" } });

		await waitFor(() => {
			expect(query.title()).toHaveValue("new title");
		})
	})
})