import React from 'react';
import { useForm, Controller } from "react-hook-form";
import Button, { ButtonRole } from '../../../base-components/button';
import { BeerWithoutId } from '../../model';
import "./createBeerFormStyles.css"

interface CreateBeerFormProps {
	onSubmit: (beer: BeerWithoutId) => void;
	onCancel: () => void;
}

const CreateBeerForm: React.FC<CreateBeerFormProps> = ({ onSubmit, onCancel }) => {

	const DEFAULT_VALUES = {
		imageUrl: "",
		name: "",
		tagline: "",
		description: "",
		bitterness: 0,
		alcoholByVolume: 0,
		ebc: 0,
		srm: 0,
		ph: 0,
	}

	const {
		control,
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onChange',
		defaultValues: DEFAULT_VALUES
	});

	return (
		<form className='createBeerForm' onSubmit={handleSubmit((value) => { reset(); onSubmit(value) })}>

			<div className='textCreateBeerContainer'>
				<Controller
					name="imageUrl"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<label>Img:
							<br />
							<input
								data-testid="beer-name"
								type='url'
								pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.jpg|.png|.gif|.jpeg|.webp|.svg)"
								value={field.value}
								placeholder={"https://image.com/.png"}
								className="createBeerInputFields"
								onChange={field.onChange}
							/>
						</label>
					)}
				/>

				<Controller
					name="name"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<label>Name:
							<br />
							<input
								data-testid="beer-name"
								type="text"
								value={field.value}
								placeholder={"name"}
								className="createBeerInputFields"
								onChange={field.onChange}
							/>
						</label>
					)}
				/>

				<Controller
					name="tagline"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<label>Tagline:
							<br />
							<input
								data-testid="beer-tagline"
								type="text"
								placeholder={"tagline"}
								value={field.value}
								className="createBeerInputFields"
								onChange={field.onChange}
							/>
						</label>
					)}
				/>

				<Controller
					name="description"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<label>Description:
							<br />
							<textarea
								data-testid="beer-description"
								placeholder={"description"}
								value={field.value}
								className="createBeerInputFields"
								onChange={field.onChange}
							/>
						</label>
					)}
				/>
			</div>

			<div className='specificationsCreateBeerContainer'>
				<Controller
					name="bitterness"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<label>Bitterness:
							<br />
							<input
								data-testid="beer-bitterness"
								type='number'
								placeholder={"0"}
								value={field.value}
								className="createBeerInputFields"
								onChange={field.onChange}
							/>
						</label>
					)}
				/>
				<Controller
					name="alcoholByVolume"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<label>Alcohol:
							<br />
							<input
								data-testid="beer-alcohol"
								type='number'
								placeholder={"0"}
								value={field.value}
								className="createBeerInputFields"
								onChange={field.onChange}
							/>
						</label>
					)}
				/>
				<Controller
					name="ebc"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<label>EBC:
							<br />
							<input
								data-testid="beer-ebc"
								type='number'
								placeholder={"0"}
								value={field.value}
								className="createBeerInputFields"
								onChange={field.onChange}
							/>
						</label>
					)}
				/>
				<Controller
					name="srm"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<label>SRM:
							<br />
							<input
								data-testid="beer-bitterness"
								type='number'
								placeholder={"0"}
								value={field.value}
								className="createBeerInputFields"
								onChange={field.onChange}
							/>
						</label>
					)}
				/>
				<Controller
					name="ph"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<label>pH:
							<br />
							<input
								data-testid="beer-ph"
								type='number'
								placeholder={"0"}
								value={field.value}
								className="createBeerInputFields"
								onChange={field.onChange}
							/>
						</label>
					)}
				/>
			</div>

			<div className='containerButtonCreateBeerForm'>
				<Button name="Confirm" className='ConfirmButtonForm' role={ButtonRole.Primary} type='submit'>Confirm</Button>
				<Button name="Cancel" onClick={onCancel}>Cancel</Button>
			</div>
		</form>
	)
}

export default CreateBeerForm;