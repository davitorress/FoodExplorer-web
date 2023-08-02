export interface Recipe {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string | null;
	category_id: number;
	ingredients: string[];
}

export interface Category {
	id: number;
	name: string;
	recipes: Recipe[];
}
