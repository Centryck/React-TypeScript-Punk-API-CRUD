import React, { PropsWithChildren } from "react";
import cn from 'classnames';
import "./buttonStyles.css";

export enum ButtonRole {
	Default = "Default",
	Primary = "Primary",
	Secondary = "Secondary",
	Remove = "Remove",
	Create = "Create",
}

interface ButtonProps {
	name: string;
	role?: ButtonRole;
	className?: string;
	onClick?: (event: any) => void;
	isDisabled?: boolean;
	testID?: string;
	type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
	name,
	role = ButtonRole.Default,
	className = "",
	onClick = () => { },
	isDisabled = false,
	testID = "button",
	type = "button",
	children,
}) => {

	const classNames = cn(
		"Button",
		`Button${role}`,
		className.split(" "),
	);

	return (
		<button
			data-testid={testID}
			aria-label={name}
			className={classNames}
			onClick={onClick}
			disabled={isDisabled}
			type={type}
		>
			{children}
		</button>
	)
}

export default Button;