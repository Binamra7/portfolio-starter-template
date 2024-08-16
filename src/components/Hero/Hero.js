import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {
	LeftSection,
	Wrapper,
	StaticText,
	DynamicText,
	List,
	Span,
} from "./HeroStyles";

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hi. I am
				<br />
				Binamra Khadka
			</SectionTitle>

			<SectionText>
				I am currently enrolled in a undergrad program in CS. I like building
				full-stack projects and learn new stuff.
			</SectionText>
			<a href="binamra.pdf" target="_blank">
				<Button>Learn More</Button>
			</a>
		</LeftSection>
	</Section>
);

export default Hero;
