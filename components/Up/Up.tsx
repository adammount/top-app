import { motion, useAnimation } from 'framer-motion'
import { JSX, useEffect } from 'react'
import { useScrollY } from '../../hooks/useScrollY'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'
import styles from './Up.module.css'

export const Up = (): JSX.Element => {
	const controls = useAnimation();
	const y = useScrollY();
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	useEffect(() => {
		controls.start( { opacity: y / document.body.scrollHeight } )
	}, [y, controls]);

	return (
		<motion.div 
			className={styles.up} 
			animate={controls}
			initial={ {opacity: 0}}
		>
			<ButtonIcon appearance='primary' icon='up' onClick={scrollToTop} aria-label='Наверх'/>
		</motion.div>
	);
};
