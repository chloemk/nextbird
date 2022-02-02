import React, { useState, useCallback } from 'react';

const useToggle = (initialValue) => {
	const [value, setValue] = useState(initialValue);
	const toggleHandler = useCallback(() => {
		setValue((prev) => !prev);
	}, []);

	return [value, toggleHandler];
};

export default useToggle;
