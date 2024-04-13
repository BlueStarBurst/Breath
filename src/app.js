import React, {
	useRef,
	useState,
	useEffect,
	useCallback,
	useLayoutEffect,
	Suspense,
} from "react";
import { render } from "react-dom";

import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	solid,
	regular,
	brands,
	icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

// import * as THREE from 'three'

import { TextField } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Question } from "./tools";

import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
import { Block, Questions } from "./questions";

// dark theme
let theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#de6af7",
		},
	},
});

function App() {
	useEffect(() => {
		// get scroll of root
		document.documentElement.addEventListener("scroll", getScroll);
		return () => {
			document.documentElement.removeEventListener("scroll", getScroll);
		};
	}, []);

	function getScroll(e) {
		console.log(e);
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<div className="header">
				<h1>PRANA</h1>
				<p>
					Welcome to Prana-Breath, where the essence of life takes center stage
					in a post-COVID-19 world. In this critical interaction project, the
					air we breathe becomes a focal point as we navigate through the
					landscapes of our evolved relationship with breath. As the pandemic
					reshapes our perceptions, 'Prana-Breath' invites you on a web-based
					journey to explore the depths of air quality and personal well-being.
					From urban indoor sanctuaries to occasional outdoor vistas, this game
					transcends mere entertainment, challenging participants to reflect,
					adapt, and ultimately redefine their connection to the very essence of
					life. Prepare to embark on a voyage where each breath carries
					significance, and every decision shapes the world around you.
				</p>
			</div>

			<div className="scroller">
				<ParallaxProvider>
					<div className="background">
						<Parallax speed={-200}>
							<img src="https://source.unsplash.com/random/1920x1080" />
						</Parallax>
						{/* <Parallax speed={-200}> */}

						<Questions
							center={0.75}
							question="How do you react to this sudden change in your air quality?"
							answers={[
								"Ignore it, assuming it’s temporary",
								"Feel bothered but do nothing",
								"Look for air quality reports online",
								"Start sketching a device to clean your air",
								"Write a social media post urging action",
								"Open windows and turn on fans, balancing comfort and energy use",
								"Imagine a future with advanced air control",
								"Check if the neighbors, especially the vulnerable, are okay",
							]}
						/>

						{/* </Parallax> */}
					</div>

					<Block />

					<div className="background">
						<Parallax speed={-200}>
							<img src="https://source.unsplash.com/random/1920x1080" />
						</Parallax>
						<Questions
							center={0.75}
							question="What is your immediate response to these health impacts?"
							answers={[
								"Doubt they’re linked to air quality",
								"Feel increasingly anxious and helpless",
								"Research health effects of poor air quality",
								"Prototype a personal air purifier",
								"Organize a community health screening",
								"Implement practical changes at home/work",
								"Dream of a healthcare system that preempts such issues",
								"Distribute masks and air purifiers to at-risk neighbors",
							]}
						/>
					</div>

					<Block />

					<div className="background">
						<Parallax speed={-200}>
							<img src="https://source.unsplash.com/random/1920x1080" />
						</Parallax>
						<Questions
							center={0.75}
							question="How do you discern and handle this information?"
							answers={[
								"Skeptical of dramatic news, trust few sources",
								"Overwhelmed by the information, ignore it",
								"Analyze data and verify sources",
								"Use information to improve your technological solution",
								"Share verified information to educate others",
								"Focus on practical and credible news",
								"Envision new systems based on futuristic ideals",
								"Filter information to protect and inform the vulnerable",
							]}
						/>
					</div>

					<Block />

					<div className="background">
						<Parallax speed={-200}>
							<img src="https://source.unsplash.com/random/1920x1080" />
						</Parallax>
						<Questions
							center={0.75}
							question="What initiative do you undertake to improve the communal air quality?"
							answers={[
								"Reluctantly join a local environmental group",
								"Participate in a local clean-up day",
								"Start an informative blog or workshop",
								"Develop a community-based air monitoring tool",
								"Lead a campaign for stricter air quality regulations",
								"Advocate for realistic policy changes in local governance",
								"Conceptualize a green tech start-up",
								"Organize health camps and awareness drives",
							]}
						/>
					</div>

					<Block />

					<div className="background">
						<Parallax speed={-200}>
							<img src="https://source.unsplash.com/random/1920x1080" />
						</Parallax>
						<Questions
							center={0.75}
							question="How do you see the future of your community’s air quality and your role in it?"
							answers={[
								"Unsure, expects little change",
								"Hopeful but cautious",
								"Informed and optimistic about technological advancements",
								"Innovating for better future solutions",
								"Committed to continuing advocacy and action",
								"Realistically optimistic, planning further practical steps",
								"Envisions a radical transformation driven by innovation",
								"Dedicated to ongoing protection and education",
							]}
						/>
					</div>
				</ParallaxProvider>
			</div>
		</ThemeProvider>
	);
}

render(<App />, document.getElementById("root"));
