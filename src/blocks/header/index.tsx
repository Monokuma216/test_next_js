import styles from './header-styles.module.css';
import {Button, Divider, Grid, List, ListItemButton, Typography} from "@mui/material";
import data from "../../data/data_landing_main_page";
import React from "react";
import {useRouter} from 'next/router';

const Header = () => {
	const router = useRouter();

	const handleClick = (e, href) => {
		e.preventDefault();
		router.push(href);
	};

	function onButtonClick(_) {
		window.location.href = 'https://vk.com/myleadsru';
	}

	return (
		<>
			<Grid container justifyContent='right' className={styles.heading}>
				<Grid item xs={3} container justifyContent='center' className={styles.heading__navbar_grid}>
					<List component={'nav'} className={styles.heading__navbar}>
						{data.navbar.map(({id, value, href, active}) =>
							active ?
								<a key={id} href={href} onClick={(event) => handleClick(event, href)}>
									<ListItemButton
										selected={href === router.pathname}
										disableGutters
										disabled={href !== '/'}
									>
										<Typography fontSize={'20px'} component='span'>
											{value}
										</Typography>
									</ListItemButton>
								</a>
								: <ListItemButton
									selected={href === router.pathname}
									disableGutters
									disabled={href !== '/'}
								>
									<Typography fontSize={'20px'} component='span'>
										{value}
									</Typography>
								</ListItemButton>
						)}
					</List>
				</Grid>
				<Grid item xs={4} className={styles.heading__logo}>
					<Typography
						fontSize={'50px'}
						component='span'
					>
                        My
					</Typography>
					<Typography
						fontSize={'50px'}
						component='span'
						className={styles.right}
					>
                        Leads
					</Typography>
				</Grid>
				<Grid item xs={4} container justifyContent='center'>
					<Button
						sx={{
							padding: '18px 43px',
							background: '#6F66D7',
							borderRadius: 50
						}}
						variant='contained'
						onClick={onButtonClick}>
                        Попробовать
					</Button>
				</Grid>
			</Grid>
			<Divider/>
		</>
	);
};

export default Header;
