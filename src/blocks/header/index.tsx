import styles from './header-styles.module.css';

const Header = () => {
	return(
		<div className={styles.header}>
			<img className={styles.headerLogo} src='/images/logo.png' alt='error'/>
			<h2 className={styles.headerElement}>Текст просто текст</h2>
		</div>
	);
};

export default Header;
