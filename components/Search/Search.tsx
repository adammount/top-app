import cn from 'classnames'
import { useRouter } from 'next/router'
import { JSX, useState, KeyboardEvent } from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import GlassIcon from './glass.svg'
import styles from './Search.module.css'
import { SearchProps } from './Search.props'

export const Search = ({
	className,
	...props
}: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter()

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		})
	}

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key == 'Enter') {
			goToSearch();
		}
	}

	return (
		<form className={cn(className, styles.search)} {...props} role='search'>
			<Input 
			className={styles.input}
			placeholder='Поиск...'
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			onKeyDown={handleKeyDown} 
			/>
			<Button
			appearance='primary'
			className={styles.button}
			onClick={goToSearch}
			aria-label='Искать по сайту'
			>
				<GlassIcon />
			</Button>
		</form>
	);
};
