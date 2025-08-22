import axios from 'axios'
import { GetStaticProps } from 'next'
import { JSX } from 'react'
import { Htag } from '../components'
import { API } from '../helpers/api'
import { MenuItem } from '../interfaces/menu.interface'
import { withLayout } from '../layout/layout'

function Home({}: HomeProps): JSX.Element {	
	
	// пример использования useEffect при каждом рендере
	/*
	const [counter, setCounter] = useState<number>(0)

	useEffect(() => {
		console.log('Conter ' + counter);
		return function cleanup() {
			console.log('Unmount')
		}
	})
	*/

	// пример использования useEffect без зависимости
	/*
	useEffect(() => {
		console.log('Conter ' + counter);
		return function cleanup() {
			console.log('Unmount')
		}
	}, [])
*/
	return (
		<>
				<Htag tag="h1">Добро пожаловать</Htag>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps > = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	})
	return {
		props: {
			menu,
			firstCategory
		}
	}
}

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}