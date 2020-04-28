import { useState, useEffect } from 'react';

const useModal = () => {
	const [isShowing, setIsShowing] = useState(false);

	const onEscKeyDown = (e) => {
		if (!isShowing || e.key !== 'Escape') return;
		setIsShowing(false);
	};

	useEffect(() => {
    window.addEventListener('keydown', onEscKeyDown, false);
    return () => {
      window.removeEventListener('keydown',onEscKeyDown,false)
    }
	});

	function toggle() {
		setIsShowing(!isShowing);
	}

	return {
		isShowing,
		toggle,
	};
};

export default useModal;
