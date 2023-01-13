import React from 'react';
import { useForm, Controller } from "react-hook-form";
import Button, { ButtonRole } from '../../../../base-components/button';
import { Beer } from '../../../model';
import "../beerCardStyles.css";

interface BeerEditableContentProps {
	beerItem: Beer;
	onSubmit: (beer: Beer) => void;
	onCancel: () => void;
}

const BeerEditableContent: React.FC<BeerEditableContentProps> = ({ beerItem, onSubmit, onCancel }) => {

	const {
		control,
		handleSubmit,
	} = useForm({
		mode: 'onChange',
		defaultValues: beerItem,
	});

	return (
		<form className="cardContainer" onSubmit={handleSubmit(onSubmit)} data-testid="update-beer-form">
		<div className='contentContainer'>
			<div className='textContainer'>
				<Controller
					name="name"
					control={control}
					render={({ field }) => (
						<label>Name:
							<br />
							<input
								data-testid="beer-name"
								type="text"
								value={field.value}
								className="inputFields"
								onChange={field.onChange}
							/>
						</label>
					)}
				/>

				<Controller
					name="tagline"
					control={control}
					render={({ field }) => (
						<label>Tagline:
							<br />
							<input
								data-testid="beer-tagline"
								type="text"
								value={field.value}
								className="inputFields"
								onChange={field.onChange}
							/>
						</label>
					)}
				/>

				<Controller
					name="description"
					control={control}
					render={({ field }) => (
						<label>Description:
							<br />
							<textarea
								data-testid="beer-description"
								value={field.value}
								className="inputFields"
								onChange={field.onChange}
							/>
						</label>
					)}
				/>
			</div>

			<div className='specificationsContainer'>
				<Controller
					name="bitterness"
					control={control}
					render={({ field }) => (
						<>
							<label>Bitterness:
								<br />
								<input
									data-testid="beer-bitterness"
									type='number'
									value={field.value}
									className="inputFields"
									onChange={field.onChange}
								/>
							</label>
						</>
					)}
				/>

				<Controller
					name="alcoholByVolume"
					control={control}
					render={({ field }) => (
						<>
							<label>Alcohol:
								<br />
								<input
									data-testid="beer-alcohol"
									type='number'
									value={field.value}
									className="inputFields"
									onChange={field.onChange}
								/>
							</label>
						</>
					)}
				/>

				<Controller
					name="ebc"
					control={control}
					render={({ field }) => (
						<>
							<label>EBC:
								<br />
								<input
									data-testid="beer-ebc"
									type='number'
									value={field.value}
									className="inputFields"
									onChange={field.onChange}
								/>
							</label>
						</>
					)}
				/>

				<Controller
					name="srm"
					control={control}
					render={({ field }) => (
						<>
							<label>SRM:
								<br />
								<input
									data-testid="beer-srm"
									type='number'
									value={field.value}
									className="inputFields"
									onChange={field.onChange}
								/>
							</label>
						</>
					)}
				/>

				<Controller
					name="ph"
					control={control}
					render={({ field }) => (
						<>
							<label>pH:
								<br />
								<input
									data-testid="beer-ph"
									type='number'
									value={field.value}
									className="inputFields"
									onChange={field.onChange}
								/>
							</label>
						</>
					)}
				/>
			</div>
			</div>

			<div className="buttonContainer">
				<Button name="confirm" type='submit' className='ContentConfirmButton' role={ButtonRole.Primary}>Confirm</Button>
				<Button name="cancel" onClick={onCancel}>Cancel</Button>
			</div>
		</form>

	)
}

export default BeerEditableContent;