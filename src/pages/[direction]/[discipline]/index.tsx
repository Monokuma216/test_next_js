import Link from 'next/link';
import Layout from '../../../components/layout';
import directions from '../../../data/directions.json';


const Discipline = ({ direction, discipline }: any) => {
	return(
		<Layout>
			<h1>А где мы теперь?</h1>
			<h1>Правильно /{direction.name}/{discipline.name}</h1>
			<h3>
				<Link href={`/${direction.link}`}>Вернуться назад</Link>
			</h3>
		</Layout>
	);
};

export async function getStaticPaths() {
	const paths = directions.map(direction =>
		direction.disciplines.map(discipline => {
			return { params: { direction: direction.link, discipline: discipline.link } };
		})
	).reduce((prev, cur) => prev.concat(cur));

	console.log(123, paths);
	return {
		paths,
		fallback: true
	};
}

export async function getStaticProps({ params }: any) {
	const direction =  directions.filter(direction => direction.link === params.direction)[0];
	return {
		props: {
			direction: directions.filter(direction => direction.link === params.direction)[0],
			discipline: direction.disciplines.filter(discipline => discipline.link === params.discipline)[0]
		},
	};
}

export default Discipline;
