import { Que } from "./App";

export function getFinalState(baseState: number, queue: Que[]) {
	let finalState = baseState;
	
	// TODO: do something with the queue...
	for (const elem of queue) {
		if (typeof elem === "number") finalState = elem;
		else finalState = elem(finalState)
	}

	return finalState;
}
