import React from 'react';
import Button, { ButtonRole } from '../../../../base-components/button';
import { Beer } from '../../../model';
import "../beerCardStyles.css"

interface BeerDefaultContentProps {
	beerItem: Beer;
	handleEditFields: () => void;
	onRemoveBeer: (beerId: number) => void;
}

const BeerDefaultContent: React.FC<BeerDefaultContentProps> = ({ beerItem, handleEditFields, onRemoveBeer }) => {
	const {
		name,
		tagline,
		description,
		alcoholByVolume,
		bitterness,
		ebc,
		srm,
		ph,
	} = beerItem;


	return (
		<div className="cardContainer">
			<div className='contentContainer'>

				<div className='textContainer'>
					<span className='beerItemName'>{name}</span>
					<span className='beerTagline'>{tagline}</span>
					<span className='beerDescription'>{description}</span>
				</div>

				<div className='specificationsContainer'>
					<span>Bitterness: {bitterness}</span>
					<span>Alcohol: {alcoholByVolume}</span>
					<span>EBC: {ebc}</span>
					<span>SRM: {srm}</span>
					<span>pH: {ph}</span>
				</div>
			</div>

			<div className="buttonContainer">
				<Button name="edit" role={ButtonRole.Primary} className={"ContentConfirmButton"} onClick={handleEditFields}>Edit</Button>
				<Button name="remove" role={ButtonRole.Remove} onClick={() => onRemoveBeer(beerItem.id)}>Remove</Button>
			</div>
		</div>
	)
}

export default BeerDefaultContent;