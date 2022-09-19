import core from '@actions/core';
import github from '@actions/github';

try {
	const shouldConfigure = core.getInput('configure');
	console.log({configure:shouldConfigure});

	if (shouldConfigure) {
		console.log('CONFIGURING');
	} else {
		console.log('RUNNING');
	}

	core.setOutput("jobs", JSON.stringify(["first", "second", "third"]));

	const payload = JSON.stringify(github.context.payload, undefined, 2)
	console.log(`The event payload: ${payload}`);
} catch (error) {
	core.setFailed(error.message);
}
