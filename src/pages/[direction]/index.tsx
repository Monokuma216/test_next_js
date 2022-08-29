import Link from 'next/link';
import Layout from '../../components/layout';
import directions from '../../data/directions.json';


const Direction = ({ direction }: any) => {
	return(
		<Layout>
			<h1>Направление у нас какое?</h1>
			<h1>Правильно /{direction.name}</h1>
			<ul>
				{direction.disciplines.map((discipline, index) =>
					<li key={index}>
						<Link href={`/${direction.link}/${discipline.link}`}>
							{discipline.name}
						</Link>
					</li>
				)}
			</ul>
		</Layout>
	);
};

export async function getStaticPaths() {
	return {
		paths: directions.map((direction) => {
			return {
				params: { direction: direction.link }
			};
		}),
		fallback: true
	};
}

export async function getStaticProps({ params }: any) {
	return {
		props: {
			direction: directions.filter(direction => direction.link === params.direction)[0]
		},
	};
}

export default Direction;
