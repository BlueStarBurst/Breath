import { Button } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";

export function Question(props) {
	const [question, setQuestion] = useState("");
	const [answers, setAnswers] = useState(["A", "B", "C", "D"]);
	const [A, setA] = useState(["A", "B", "C", "D"]);
	const [B, setB] = useState(["A", "B", "C", "D"]);

	const [selected, setSelected] = useState(null);

	useEffect(() => {
		setQuestion(props.question || "");
	}, [props.question]);

	useEffect(() => {
		setAnswers(props.answers || []);
		if (props.answers.length > 0) {
			setA(props.answers.slice(0, props.answers.length / 2));
			setB(props.answers.slice(props.answers.length / 2));
		}
	}, [props.answers]);

	return (
		<div className="q">
			<h2>{question}</h2>
			<div className="a-block">
				<div className="a">
					{A.map((answer, index) => (
						<Button
							className="ans-button"
							variant={selected == answer ? "contained" : "outlined"}
							key={index}
							onClick={(e) => {
								setSelected(answer);
							}}
						>
							<p>{answer}</p>
						</Button>
					))}
				</div>
				<div className="a">
					{B.map((answer, index) => (
						<Button
							className="ans-button"
							variant={selected == answer ? "contained" : "outlined"}
							key={index}
							onClick={(e) => {
								setSelected(answer);
							}}
						>
							<p>{answer}</p>
						</Button>
					))}
				</div>
			</div>
		</div>
	);
}
