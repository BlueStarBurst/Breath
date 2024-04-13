import React from "react";

import { Parallax, useParallax } from "react-scroll-parallax";
import { Question } from "./tools";

export function Questions(props) {
	const parallax = useParallax({
		easing: "easeOutQuad",
		onProgressChange: (progress) => {
			if (parallax.ref.current) {
				// set progress to CSS variable
				parallax.ref.current.style.setProperty(
					"--progress",
					(1 - Math.abs(props.center - progress) / 0.35).toString()
				);
			}
		},
	});

	return (
		<>
			<div ref={parallax.ref} className="questions">
				<Parallax speed={-100}>
					<Question question={props.question} answers={props.answers} />
				</Parallax>
			</div>
		</>
	);
}

export function Block() {
	const parallax = useParallax({
		easing: "easeOutQuad",
		onProgressChange: (progress) => {
			if (parallax.ref.current) {
				// set progress to CSS variable
				parallax.ref.current.style.setProperty(
					"--progress",
					((1 - (0.75 - progress) / 0.75) * 100).toString() + "px"
				);
				console.log(parallax.ref.current.style.getPropertyValue("--progress"));
				console.log(progress);
			}
		},
	});

	return (
		<>
			<div className="block" ref={parallax.ref}></div>
		</>
	);
}
