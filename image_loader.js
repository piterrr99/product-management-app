export default function myImageLoader({ src, width, quality }) {
	return `https://picsum.photos/${src}?w=${width}&q=${quality || 75}`
}