import Link from 'next/link';
import Layout from '../../components/layout';
import styles from './style.module.css';

const Example = () => {
	return (
		<Layout>
			<h1 className={styles.exampleText}>
				Просто пример страницы
			</h1>
			<Link href='/'>Вернуться назад</Link>
		</Layout>
	);
};

export default Example;
