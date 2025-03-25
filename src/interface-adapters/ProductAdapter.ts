interface ApiUnreviewedProduct {
	_id: number;
	item_name: string;
	supplier_company: string;
	price_amount: number;
	price_currency: string;
	description_text: string;
	image_url: string;
	created_at: Date;
};

export interface ClientUnreviewedProduct {
	id: string;
	productProvider: string;
	productName: string;
	productImage: string;
	productDescription: string;
	productPrice: number;
};

interface ApiReviewedProduct extends ApiUnreviewedProduct {
	approved: boolean;
};

export interface ClientReviewedProduct extends ClientUnreviewedProduct{
	status: 'approved' | 'rejected';
};

export class ProductAdapter {
	static adaptUnreviewed(products: ApiUnreviewedProduct[]): ClientUnreviewedProduct[] {
		const clientUnreviewedArray = products.map((product: ApiUnreviewedProduct)=>{
			return {
				id: product._id.toString(),
				productName: product.item_name,
				productProvider: product.supplier_company,
				productDescription: product.description_text,
				productImage: this.formatImageUrl(product.image_url),
				productPrice: this.calculateDollarPrice(product),
			};
		});
		return clientUnreviewedArray;
		
	};

	static adaptReviewed(products: ApiReviewedProduct[]): ClientReviewedProduct[] {
		const clientReviewedArray = products.map((product: ApiReviewedProduct): ClientReviewedProduct=>{
			return {
				id: product._id.toString(),
				productName: product.item_name,
				productProvider: product.supplier_company,
				productDescription: product.description_text,
				productImage: this.formatImageUrl(product.image_url),
				productPrice: this.calculateDollarPrice(product),
				status: product.approved ? 'approved' : 'rejected',
			};
		});
		return clientReviewedArray;
	};

	private static formatImageUrl(imageUrl: string): string {
		const formattedUrl = imageUrl.replace('https://picsum.photos/', '');
		return formattedUrl;
	};

	private static calculateDollarPrice(product: ApiUnreviewedProduct | ApiReviewedProduct): number {
		let finalPrice: number = product.price_amount;
		switch (product.price_currency) {
			case '£':
				finalPrice = finalPrice * 1.29
				break;
			case '€':
				finalPrice = finalPrice * 1.08
				break;
			default:
				finalPrice = finalPrice * 1
				break;
		};
		finalPrice = Number(finalPrice.toFixed(2))
		return finalPrice;
	}

}