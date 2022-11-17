import React from 'react';
import './Overlay.css';
import { motion } from 'framer-motion';

export default function Overlay({ children, close }) {
	const variants = {
		open: { backgroundColor: 'rgba(0,0,0,0.6)' },
		close: { backgroundColor: 'rgba(0,0,0,0)' }
	};


	return (
		<motion.div
			className='overlay'
			onClick={close}
			variants={variants}
			initial={'closed'}
			exit={'closed'}
			animate={'open'}
			key={'overlay'}
		>
			{children}
		</motion.div>
	)
};
