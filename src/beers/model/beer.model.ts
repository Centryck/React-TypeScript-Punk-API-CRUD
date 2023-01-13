export interface Volume {
	value: number;
	unit: string;
}

export interface BoilVolume {
	value: number;
	unit: string;
}

export interface MashTempTemperature {
	value: number;
	unit: string;
}

export interface MashTemp {
	temp: MashTempTemperature;
	duration: number;
}

export interface FermentationTemperature {
	value: number;
	unit: string;
}

export interface Fermentation {
	temp: FermentationTemperature;
}

export interface Method {
	mash_temp: MashTemp[];
	fermentation: Fermentation;
	twist?: any;
}

export interface MaltAmount {
	value: number;
	unit: string;
}

export interface HopsAmount {
	value: number;
	unit: string;
}

export interface Hops {
	name: string;
	amount: HopsAmount;
	add: string;
	attribute: string;
}
export interface Malt {
	name: string;
	amount: MaltAmount;
}

export interface Ingredients {
	malt: Malt[];
	hops: Hops[];
	yeast: string;
} 

export interface Beer {
	id: number;
	name: string;
	tagline: string;
	description: string;
	imageUrl: string;
	alcoholByVolume: number;
	bitterness: number;
	ebc: number;
	srm: number;
	ph: number;
}

export interface BeerWithoutId {
	name: string;
	tagline: string;
	description: string;
	imageUrl: string;
	alcoholByVolume: number;
	bitterness: number;
	ebc: number;
	srm: number;
	ph: number;
}