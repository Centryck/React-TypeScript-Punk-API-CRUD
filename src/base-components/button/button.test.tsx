import { render, fireEvent, screen } from "@testing-library/react";
import Button, { ButtonProps, ButtonRole } from "./";

const NAME = "button";
const ROLE = ButtonRole.Primary;
const CLASS_NAME = "button";
const IS_DISABLED = true;
const TYPE = "submit";
const ON_CLICK = jest.fn();

const renderElement = (props?: Partial<ButtonProps>) => {
	const utils = render(<Button name={NAME} {...props} >Button text</Button>);

	const query = {
		button: () => screen.getByText("Button text"),
	}

	return {...utils, query}
}

describe('Button', () => {
	it("should render default button", () => {
		const {query} = renderElement();

		expect(query.button()).not.toBeNull();
		expect(query.button()).not.toBeDisabled();
		expect(query.button()).toHaveClass("ButtonDefault");
		expect(query.button()).toHaveAttribute("type", "button");

		fireEvent.click(query.button());

		expect(ON_CLICK).not.toHaveBeenCalled();
	});

	it("should custom button", () => {
		const {query} = renderElement({
			name: NAME,
			role: ROLE,
			className: CLASS_NAME,
			type: TYPE,
			onClick: ON_CLICK,
		});

		expect(query.button()).not.toBeNull();
		expect(query.button()).not.toBeDisabled();
		expect(query.button()).toHaveClass("ButtonPrimary button");
		expect(query.button()).toHaveAttribute("type", "submit");

		fireEvent.click(query.button());

		expect(ON_CLICK).toHaveBeenCalledTimes(1);
	});

	it("should be disabled if isDisabled is passed", () => {
		const {query} = renderElement({
			name: NAME,
			isDisabled: IS_DISABLED,
			onClick: ON_CLICK,
		});

		expect(query.button()).not.toBeNull();
		expect(query.button()).toBeDisabled();

		fireEvent.click(query.button());

		expect(ON_CLICK).not.toHaveBeenCalled();
	})
})