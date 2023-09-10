import type { WorkerMessage, Problem, ResultFailureState, ResultSuccessState } from '$lib/types';
import Worker from './worker.ts?worker';

export const problems: Problem[] = [
	{
		name: 'Add numbers',
		problem: 'Make a function called `add` that takes two numbers and returns their sum.',
		testFn: 'add',
		args: [
			{
				tag: 'number',
				tests: [1, 14]
			},
			{
				tag: 'number',
				tests: [2, 23]
			}
		],
		ret: {
			tag: 'number',
			tests: [3, 37]
		}
	},
	{
		name: 'Add arrays',
		problem:
			'Make a function called `addArray` that takes an array of numbers and returns their sum.',
		testFn: 'addArray',
		args: [
			{
				tag: 'numberArray',
				tests: [
					[1, 2],
					[3, 4]
				],
				name: 'a'
			}
		],
		ret: {
			tag: 'number',
			tests: [3, 7]
		}
	}
];
function argName(index: number): string {
	// do abcdefghijklmnopqrstuvwxyz
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let name = '';
	let i = index;
	while (i >= 0) {
		name = alphabet[i % alphabet.length] + name;
		i = Math.floor(i / alphabet.length) - 1;
	}
	return name;
}
export function getStartingCode(problem: Problem): string {
	const argsString = problem.args.map((arg, index) => arg.name ?? argName(index)).join(', ');
	return /*javascript*/ `function ${problem.testFn}(${argsString}) {
	// your code here
}`;
}

export const TIMEOUT = 3000;
export async function testProblem(
	problem: Problem,
	code: string
): Promise<ResultFailureState | ResultSuccessState> {
	const worker = new Worker();

	worker.postMessage({
		problem,
		code
	});

	const ret = await new Promise<ResultFailureState | ResultSuccessState>((resolve) => {
		const startTime = Date.now();
		const listen = (event_1: MessageEvent<WorkerMessage>) => {
			if (event_1.data.tag === 'success') {
				resolve({
					tag: 'success',
					time: Date.now() - startTime
				});
			} else if (event_1.data.tag === 'failure') {
				resolve({
					tag: 'failure',
					reason: event_1.data.reason
				});
			}
		};
		worker.addEventListener('message', listen);
		worker.onerror = (event) => {
			worker.removeEventListener('message', listen);
			resolve({
				tag: 'failure',
				reason: {
					tag: 'error',
					message: event.message
				}
			});
			worker.terminate();
			return true;
		};

		setTimeout(() => {
			worker.removeEventListener('message', listen);
			resolve({
				tag: 'failure',
				reason: {
					tag: 'timeout'
				}
			});
		}, TIMEOUT);
	});
	worker.terminate();
	return ret;
}

// function newTestScriptString(problem: Problem): string {
// 	return /*javascript*/ `
// 		${problem.testFn}
// 		(function () {
// 			let testCases = ${JSON.stringify(problem.testCases)};
// 			for (let i = 0; i < testCases.length; i++) {
// 				let testCase = testCases[i];
// 				let result = window._TEST(...testCase.input.map((arg) => arg.value));
// 				if (result !== testCase.output.value) {
// 					window.top.postMessage({
// 						tag: 'failure',
// 						reason: {
// 							tag: 'wrongAnswer',
// 							testCase: i,
// 							expected: testCase.output.value,
// 							actual: result,
// 						},
// 					}, '*');
// 					return;
// 				}
// 			}
// 			window.top.postMessage({
// 				tag: 'success',
// 			}, '*');
// 			return;
// 		})();
// 		`;
// }

// export async function testProblem(
// 	problem: Problem,
// 	code: string
// ): Promise<ResultFailureState | ResultSuccessState> {
// 	const errorScript = document.createElement('script');
// 	errorScript.textContent = /*javascript*/ `
// 		window.onerror = function (event) {
// 			window.top.postMessage({
// 				tag: 'failure',
// 				reason: {
// 					tag: 'error',
// 					message: event,
// 				},
// 			}, '*');
// 			return true;
// 		};`;
// 	const codeScript = document.createElement('script');
// 	codeScript.textContent = code;
// 	const testScript = document.createElement('script');
// 	testScript.textContent = newTestScriptString(problem);

// 	const iframeBody = document.createElement('body');
// 	iframeBody.appendChild(errorScript);
// 	iframeBody.appendChild(codeScript);
// 	iframeBody.appendChild(testScript);

// 	const iframe = document.createElement('iframe');
// 	iframe.style.display = 'none';
// 	iframe.setAttribute('sandbox', 'allow-scripts');
// 	iframe.srcdoc = iframeBody.outerHTML;
// 	document.body.appendChild(iframe);

// 	const result_2 = await new Promise<ResultFailureState | ResultSuccessState>((resolve) => {
// 		const startTime = Date.now();
// 		const listen = (event_1: MessageEvent<IframeMessage>) => {
// 			if (event_1.data.tag === 'success') {
// 				resolve({
// 					tag: 'success',
// 					time: Date.now() - startTime
// 				});
// 			} else if (event_1.data.tag === 'failure') {
// 				resolve({
// 					tag: 'failure',
// 					reason: event_1.data.reason
// 				});
// 			}
// 		};
// 		window.addEventListener('message', listen);
// 		setTimeout(() => {
// 			window.removeEventListener('message', listen);
// 			resolve({
// 				tag: 'failure',
// 				reason: {
// 					tag: 'timeout'
// 				}
// 			});
// 		}, TIMEOUT);
// 	});
// 	iframe.remove();
// 	return result_2;
// }
