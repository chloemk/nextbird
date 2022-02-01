import React, { useState, useCallback } from 'react';

const useCustomInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);
	const inputHandler = useCallback((e) => {
		setValue(e.target.value);
	}, []);

	return [value, inputHandler];
};

export default useCustomInput;
