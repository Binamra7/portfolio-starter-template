import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import Copy from "../components/Copy/Copy";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";

const Home = () => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="A portfolid website to showcase my skills and projects."
				/>
				<title>Binamra Khadka | Portfolio</title>
			</Head>
			<Layout>
				<Section grid>
					<Hero />
					<BgAnimation />
				</Section>
				<Projects />
				<Technologies />
				{/* <Timeline /> */}
				{/* <Acomplishments /> */}
				{/* <Copy/> */}
			</Layout>
		</>
	);
};

export default Home;
