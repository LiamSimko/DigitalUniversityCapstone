import React, {useMemo, useState, createContext} from 'react';
import ToastManager from '../../components/ToastManager.js';
import ToastContext from '../contexts/ToastContext.js';

const ToastProvider = ({children}) => {
	const [toasts, setToasts] = useState([]);
	const value = useMemo(() => ({toasts, setToasts}), [toasts]);

	return (
		<ToastContext.Provider value={value}>
			{children}
			<ToastManager />
		</ToastContext.Provider>
	);
};

export default ToastProvider;
