import React, { useState } from 'react';
import { Beer } from '../../model';
import BeerDefaultContent from './component/beer-default-content';
import BeerEditableContent from './component/beer-editable-content';
import "./beerCardStyles.css"

interface BeerCardProps {
	beerItem: Beer;
	removeBeer: (beerId: number) => void;
	updateBeer: (beerId: number, updatedBeer:Beer) => void;
}

const BeerCard: React.FC<BeerCardProps> = ({ beerItem, removeBeer, updateBeer }) => {
	const {
		id,
		name,
		imageUrl,
	} = beerItem;

	const [isEditable, setIsEditable] = useState(false);

	const onSubmit = (updatedBeer: Beer) => {
		updateBeer(id, updatedBeer);
		setIsEditable(false);
	}

	return (
		<div className='beerComponent'>
			<div className='imageContainer'>
				<img src={imageUrl} alt={`${name}`} className={"beerImage"} data-testid={"beer-img"}/>
			</div>
			{isEditable 
				? <BeerEditableContent beerItem={beerItem} onSubmit={onSubmit} onCancel={() => setIsEditable(false)}/>
				: <BeerDefaultContent beerItem={beerItem} handleEditFields={() => setIsEditable(true)} onRemoveBeer={removeBeer}/>
			}
			
		</div>
	)
}

export default BeerCard;