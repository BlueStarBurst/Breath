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

import BackTitle from "./assets/back_title.png";
import BackDesc from "./assets/back_desc.png";
import BackMain from "./assets/back_main.png";
import BackFinal from "./assets/back_final.png";

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

			<div className="scroller">
				<ParallaxProvider>
					<div className="header">
						<img src={BackTitle} />
						<h1>
							<b>prānā</b>
						</h1>
					</div>

					<div className="header desc">
						<img src={BackDesc} />
						<h2>
							<b>prānā</b>
						</h2>
						<p>
							Exploring the "new normal" post-COVID-19 era, this web-based
							critical interaction project, "Prana-Breath," delves into our
							evolved relationship with air and breath. Amidst the pandemic's
							recontextualization of air as a communal resource and breath as a
							deeply personal act, the game navigates through urban
							post-pandemic indoor and outdoor settings. Players engage in a
							journey reflecting on air quality's impact on health and society,
							identifying with personas ranging from Sleeper to Guardian.
							Participants are exposed to scenarios that challenge their
							perceptions and urge them to reflect and take action, redefining
							their relationship with the air they breathe.
						</p>
					</div>

					<div className="background">
						<Parallax speed={-200}>
							<img src={BackMain} />
						</Parallax>
						{/* <Parallax speed={-200}> */}

						<Questions
							center={0.75}
							question="You wake up feeling groggy and slightly out of sorts despite having slept well. What is your immediate reaction?							"
							answers={[
								"I shrug it off as just a bad morning; things like this happen and it's probably nothing serious",
								"I'm concerned but feel too overwhelmed to deal with it right now, hoping it'll pass soon.",
								"I start researching possible causes for feeling unwell in the morning and ways to improve my well-being",
								"I consider creating a gadget that helps track health signals while sleeping to prevent future issues",
								"I decide to advocate for better lifestyle habits within my community to enhance overall well-being",
								"I review my evening routine and plan regular checks to maintain a healthy living environment",
								"I dream of a future where everyone's living spaces are optimized for health and propose this idea online",
								"I check if my family members are experiencing similar feelings and consider ways to ensure our home supports our health",
							]}
						/>

						{/* </Parallax> */}
					</div>

					<Block />

					<div className="background">
						<Parallax speed={-200}>
							<img src={BackMain} />
						</Parallax>
						<Questions
							center={0.75}
							question="As the day progresses, you notice that you’re feeling unusually fatigued and your concentration is waning. Despite having a normal workload, you find it challenging to stay focused. What is your immediate reaction?"
							answers={[
								"I decide it's just one of those days where I’m not at my best and do nothing about it, assuming it’ll pass",
								"I recognize something might be off but tell myself I just need to get through the day and rest tonight",
								"I take a break to assess what might be affecting me and look up ways to boost energy and focus naturally",
								"I start brainstorming a personal health monitoring tool that could alert me when my stats indicate fatigue.",
								"I use this opportunity to promote workplace wellness and suggest a midday group wellness activity to my peers",
								"I evaluate my recent sleep patterns and daily habits to identify any changes that might be impacting my focus",
								"I imagine integrating an environment adaptive system into workspaces that optimizes conditions for health and productivity",
								"I ensure that my workspace is comfortable and safe, not just for me but also checking if colleagues might be affected similarly.",
							]}
						/>
					</div>

					<Block />

					<div className="background">
						<Parallax speed={-200}>
							<img src={BackMain} />
						</Parallax>
						<Questions
							center={0.75}
							question="After several days, you start experiencing consistent headaches and occasional dizziness, which you suspect might be related to your environment. How do you respond to these recurring symptoms?"
							answers={[
								"I convince myself it's probably stress or lack of sleep and avoid thinking it could be something in my environment.",
								"I acknowledge that something might be wrong, but feel too stressed to tackle the issue directly, hoping it resolves itself.",
								"I start documenting my symptoms and environmental conditions, planning to discuss them with a healthcare provider.",
								"I experiment with changes to my immediate surroundings to see if there's any improvement in my symptoms.",
								"I organize a meeting to discuss environmental health at work and advocate for regular health and safety audits.",
								"I look into more ergonomic and health-supportive adjustments for my workspace, considering expert advice.",
								"I envision a holistic health management system that integrates environmental sensors with personal health devices.",
								"I ensure that everyone in my vicinity is aware of potential symptoms and encourage them to monitor their health.",
							]}
						/>
					</div>

					<Block />

					<div className="background">
						<Parallax speed={-200}>
							<img src={BackMain} />
						</Parallax>
						<Questions
							center={0.75}
							question="As the symptoms like headaches and occasional dizziness persist, you start to reflect more deeply on their potential causes and impacts on your daily life. Before taking any action, you consider how this situation affects your mood, productivity, and interactions. What are your thoughts during this introspection?"
							answers={[
								"I think these symptoms are just random fluctuations in my health. It’s nothing serious, probably just stress or bad luck.",
								"I’m starting to worry there might be a reason for feeling this way, but it’s probably too complicated to figure out.",
								"I ponder whether my lifestyle or environment might be influencing these symptoms. I’m compiling a list of changes and patterns to discuss with a professional.",
								"I wonder if there’s a way to use technology to track these symptoms better. Could a new gadget help me understand what’s triggering them?",
								"These symptoms are a wake-up call. How many others are suffering silently? I feel urged to raise awareness about potential unseen health threats.",
								"I’m evaluating how these symptoms are affecting my work and personal life. It might be time to look at some data and possibly consult with experts soon.",
								"I reflect on the broader implications of such health issues. Could we live in a world where environmental health is seamlessly integrated into our daily lives?",
								"I’m concerned about how these symptoms might affect not just me but also those around me, especially the vulnerable. I need to keep an eye on my family and friends too.",
							]}
						/>
					</div>

					<Block />

					<div className="background">
						<Parallax speed={-200}>
							<img src={BackMain} />
						</Parallax>
						<Questions
							center={0.75}
							question="After reflecting on your persistent symptoms, you become curious about their potential causes and decide to explore further. You encounter various sources linking these health issues to air quality. As you sift through articles, blogs, and social media discussions, how do you assess and react to this specific information?"
							answers={[
								"I briefly consider the air quality articles but remain skeptical, preferring to believe it's just seasonal allergies or something similar",
								"I acknowledge the links to air quality might be real, but feel too overwhelmed to dive deeper and hope the situation improves on its own",
								"I delve into scientific research and data on air quality impacts, eager to understand the nuances and how I might protect myself better",
								"Intrigued by the connection to air quality, I start conceptualizing a device that could monitor indoor air and alert to harmful changes",
								"I become an advocate for clean air, using my platforms to educate others about the importance of good air quality and its impact on health",
								"I sift through the most reliable sources to find actionable steps that can be taken to improve air quality in my home and workplace",
								"Seeing the broader implications of air quality, I start formulating ideas for systemic changes that could ensure cleaner air for future generations",
								"Concerned especially for the vulnerable, I gather all reliable information on how to mitigate poor air quality effects and share these resources with the community.",
							]}
						/>
					</div>

					<Block />

					<div className="background">
						<Parallax speed={-200}>
							<img src={BackMain} />
						</Parallax>
						<Questions
							center={0.75}
							question="Equipped with newfound understanding about the impacts of air quality, you begin to notice the distinct differences between the air you share with others and your personal breathing space. Indoor air control seems crucial, yet the outdoor air, laden with pollen, also affects your personal breath and overall well-being. How do you process and respond to this information, considering the shared nature of air and the intimate aspect of breath?"
							answers={[
								"I acknowledge there might be a difference, but I don't see it as something that affects me personally enough to warrant action",
								"I see the importance but feel powerless to change anything about the air quality, both indoors and outdoors",
								"I dive deeper into studies about indoor air purification and the effects of outdoor allergens to fully understand how both affect our health distinctly",
								"Inspired, I start designing a dual-function device that can optimize indoor air quality while alerting to high outdoor pollen levels.",
								"Motivated by the community impact, I initiate a public health campaign to raise awareness about the critical need for both personal and communal air quality management",
								"I begin comparing different methods to manage indoor air quality and start a local initiative to plant more trees to naturally filter the outdoor air",
								"I conceptualize a new urban design model that integrates advanced air purification technology with green living spaces to harmonize indoor and outdoor air quality.",
								"Concerned especially about vulnerable groups, I develop educational programs on managing indoor environments for schools and senior centers, while advocating for better pollen control in public spaces",
							]}
						/>
					</div>

					<Block />

					<div className="background">
						<Parallax speed={-200}>
							<img src={BackMain} />
						</Parallax>
						<Questions
							center={0.75}
							question="After understanding the impact of air quality on your health, you decide to take personal actions to improve the air you breathe in your immediate surroundings. What steps do you take to ensure your own space supports your health and well-being?"
							answers={[
								"I make minimal changes, such as occasionally opening windows to let in fresh air, but mostly maintain my usual routine.",
								"Feeling a bit more empowered, I purchase an air purifier and start using hypoallergenic bedding to mitigate symptoms.",
								"I invest in a high-quality air purification system and regularly monitor my indoor air quality with smart sensors.",
								"I design a custom ventilation solution tailored to my home's specific needs, incorporating smart technology for real-time air quality feedback",
								"While improving my own air, I also start planning how I can help others, beginning with sharing tips on social media about easy home improvements for better air quality.",
								"I conduct thorough research to find the most effective and cost-efficient air purifiers and green plants that improve indoor air quality.",
								"I explore and integrate biophilic design elements into my living space, enhancing air quality with both technology and natural solutions.",
								"I ensure my actions are safe for everyone in my household, particularly focusing on the needs of children and the elderly by choosing air quality improvements that benefit everyone’s health.",
							]}
						/>
					</div>

					<Block />

					<div className="background">
						<Parallax speed={-200}>
							<img src={BackMain} />
						</Parallax>
						<Questions
							center={0.75}
							question="Motivated by the improvements you've seen in your personal environment, you now look to extend your impact to the community. What initiative do you undertake or join to help improve the communal air quality?"
							answers={[
								"I attend a community meeting about local environmental issues when invited, though I mainly listen rather than actively participate",
								"I join a local environmental group that meets occasionally to clean up parks, feeling more involved but still a bit hesitant to take on a bigger role.",
								"I organize a series of workshops at the local library to educate people about air quality management at home and in the community.",
								"I collaborate with local businesses to develop community-wide air monitoring systems that provide real-time data to all residents.",
								"I spearhead a campaign for new local regulations on industrial emissions and organize community rallies to support cleaner air laws.",
								"I partner with city planners to implement more green spaces and promote urban tree planting as practical steps toward improving air quality.",
								"I propose an innovative city-wide project that integrates sustainable living with urban development to local government, aiming to set a benchmark for future cities.",
								"I initiate a program in schools to teach children about the importance of clean air, including practical activities they can do to make a difference.",
							]}
						/>
					</div>

					<div className="header">
						<img src={BackFinal} />
					</div>
				</ParallaxProvider>
			</div>
		</ThemeProvider>
	);
}

render(<App />, document.getElementById("root"));
