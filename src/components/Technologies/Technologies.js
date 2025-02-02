import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="skills">
		<SectionDivider />
		<br />
		<br />
		<SectionTitle>Skills</SectionTitle>

		<SectionText>
			{/* I have worked with multile javascript frameworks including react, next. I have also basic knowledge of nodeJs
      C/C++,JavaScript */}
			<div style={{ color: "white" }}>
				Programming Languages: JavaScript(ES6), C/C++
			</div>
		</SectionText>

		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front end</ListTitle>
					<ListParagraph>
						{/* <li>
              <ul>HTML</ul>
              <ul>CSS</ul>
              <ul>Javascript</ul>
              <ul>ReactJS</ul>
            </li> */}
						React
						<br />
						Redux
						<br />
						JavaScript
						<br />
						HTML
						<br />
						CSS
						<br />
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Back end</ListTitle>
					<ListParagraph>
						{/* <li>
              <ul>NodeJS</ul>
              <ul>Express</ul>
              <ul>MongoDB</ul>
              <ul>Firebase</ul>
            </li> */}
						NodeJS
						<br />
						Express
						<br />
						MongoDB
						<br />
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiZend size="3rem" />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Figma
						<br />
						Photoshop
						<br />
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
