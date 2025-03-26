import { ClientReviewedProduct } from "@/interface-adapters/ProductAdapter";

export const getPageInfo = (
	pageNumber: string, reviewedProducts: ClientReviewedProduct[]
): {
	isValid: boolean, 
	pageProducts: ClientReviewedProduct[],
	startIndex?: number,
	endIndex?: number,
	totalPages?: number,
} =>{
  const parsedNumber = Number(pageNumber);
	if (typeof parsedNumber !== 'number') return {isValid: false, pageProducts: []};
	if(parsedNumber.toFixed(0) !== pageNumber) return {isValid: false, pageProducts: []};
	const arrayLength = reviewedProducts.length;
	if(parsedNumber === 1 && arrayLength === 0) {
		return {isValid: true, pageProducts: []};
	};
	const auxTotalPages = arrayLength/7;
	const totalPages = Number.isInteger(auxTotalPages) ? auxTotalPages : Math.floor(auxTotalPages + 1);
	if(parsedNumber !== 0 && totalPages >= parsedNumber) {
		const startIndex = 7 * (parsedNumber - 1);
		const endIndex = startIndex + 7;
		const pageProducts = reviewedProducts.slice(startIndex, endIndex);
		return {isValid: true, pageProducts, startIndex, endIndex, totalPages}
	} else {
		return {isValid: false, pageProducts: [], totalPages: 1}
	};
};