import React, { useState, useEffect } from 'react';

import unsplash from '../apis/unsplash';

export default function App() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchImages = async term => {
			const response = await unsplash.get('/search/photos', {
				params: {
					query: term,
					orientation: 'landscape',
				},
			});
			setImages(response.data.results);
			setIsLoading(false);
		};

		fetchImages('cars');
	}, []);

	return (
		<div className='App'>
			<h1>Start Here...</h1>
			{JSON.stringify(images)}
		</div>
	);
}
