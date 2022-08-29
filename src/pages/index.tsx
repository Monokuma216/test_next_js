import Link from 'next/link';
import Layout from '../components/layout';

const Main = () => {
	return (
		<Layout>
			<h1>
        Главная страница
			</h1>
			<h3>
				<Link href='/example'>Пример того как работает навигация</Link>
			</h3>
			<p>
        Просто текст
			</p>
		</Layout>
	);
};

export default Main;
