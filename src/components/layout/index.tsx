import Head from 'next/head';
import Header from '../../blocks/header';
import styles from './layout-styles.module.css';

const Layout = (props: ILayout) => {
	const {
		children,
		title = defaultProps.title,
		description = defaultProps.description,
		meta = defaultProps.meta
	} = props;

	return(
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description}/>
				{meta}
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.page}>
				<Header/>
				{children}
			</main>
			<footer>
				Footer
			</footer>
		</div>
	);
};

interface ILayout {
	children: any,
	title?: string,
	description?: string,
	meta?: any
}

const defaultProps = {
	title: 'Страница',
	description: 'Описание страницы',
	meta: ''
};

export default Layout;
