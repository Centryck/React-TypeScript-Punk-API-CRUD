import React from 'react';
import { render, fireEvent, screen } from "@testing-library/react";
import Button, { ButtonRole } from "./";

const NAME = "button";
const ROLE = ButtonRole.Primary;
const CLASS_NAME = "button";
const IS_DISABLED = true;
const TYPE = "submit";
const ON_CLICK = jest.fn();


describe('Button', () => {
	it("should render default button", () => {
		render(<Button name={NAME}>Button text</Button>);

		const button = screen.getByText("Button text");

		expect(button).not.toBeNull();
		expect(button).not.toBeDisabled();
		expect(button).toHaveClass("ButtonDefault");
		expect(button).toHaveAttribute("type", "button");

		fireEvent.click(button);

		expect(ON_CLICK).not.toHaveBeenCalled();
	});

	it("should custom button", () => {
		render(
			<Button
				name={NAME}
				role={ROLE}
				className={CLASS_NAME}
				type={TYPE}
				onClick={ON_CLICK}
			>
				Button text
			</Button>);

		const button = screen.getByText("Button text");

		expect(button).not.toBeNull();
		expect(button).not.toBeDisabled();
		expect(button).toHaveClass("ButtonPrimary button");
		expect(button).toHaveAttribute("type", "submit");

		fireEvent.click(button);

		expect(ON_CLICK).toHaveBeenCalledTimes(1);
	});

	it("should be disabled if isDisabled is passed", () => {
		render(
			<Button
				name={NAME}
				onClick={ON_CLICK}
				isDisabled={IS_DISABLED}
			>
				Button text
			</Button>);

		const button = screen.getByText("Button text");

		expect(button).not.toBeNull();
		expect(button).toBeDisabled();

		fireEvent.click(button);

		expect(ON_CLICK).not.toHaveBeenCalled();
	})
})