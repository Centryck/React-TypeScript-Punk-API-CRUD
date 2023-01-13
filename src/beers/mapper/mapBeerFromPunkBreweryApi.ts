import { Beer } from "../model";

export interface PunkBreweryBeer {
	id: number;
	name: string;
	tagline: string;
	first_brewed: string;
	description: string;
	image_url: string;
	abv: number;
	ibu: number;
	target_fg: number;
	target_og: number;
	ebc: number;
	srm: number;
	ph: number;
	attenuation_level: number;
	volume: {
		value: number;
		unit: string;
	};
	boil_volume: {
		value: number;
		unit: string;
	};
	method: {
	mash_temp: [{
		temp: {
			value: number;
			unit: string;
		};
		duration: number;
	}];
	fermentation: {
		temp: {
			value: number;
			unit: string;
		}
	};
	twist?: any;
	};
	ingredients: {
		malt: [{
			name: string;
			amount: {
				value: number;
				unit: string;
			};
		}];
		hops: [{
			name: string;
			amount: {
				value: number;
				unit: string;
			};
			add: string;
			attribute: string;
		}]
		yeast: string;
	};
	food_pairing: string[];
	brewers_tips: string;
	contributed_by: string;
}

type Mapper<BackendType, MappedType> = (input: BackendType) => MappedType;

export const mapBeerFromPunkBreweryApi: Mapper<PunkBreweryBeer, Beer> = input => {
	return {
		id: input.id,
		name: input.name,
		tagline: input.tagline,
		description: input.description,
		imageUrl: input.image_url,
		alcoholByVolume: input.abv,
		bitterness: input.ibu,
		ebc: input.ebc,
		srm: input.srm,
		ph: input.ph,
	}
}
