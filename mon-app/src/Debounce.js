import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

function Debounce() {

	const [value, setValue] = useState('');
	const [dbValue, saveToDb] = useState(''); // would be an API call normally

	// highlight-starts
	const debouncedSave = useCallback(
		debounce(nextValue => saveToDb(nextValue), (500)),
		[], // will be created only once initially
	);
	// highlight-ends

	const handleChange = event => {
		const { value: nextValue } = event.target;
		setValue(nextValue);
		// Even though handleChange is created on each render and executed
		// it references the same debouncedSave that was created initially
		debouncedSave(nextValue);
	};

	return (
		<main>
			<h1>Blog</h1>
			<textarea value={value} onChange={handleChange} rows={5} cols={50} />
			<section className="panels">
				<div>
					<h2>Editor (Client)</h2>
					{value}
				</div>
				<div>
					<h2>Saved (DB)</h2>
					{dbValue}
				</div>
			</section>
		</main>
	);
}
export default  Debounce;