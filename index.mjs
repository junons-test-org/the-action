import core from '@actions/core';
import github from '@actions/github';

try {
	const job = core.getInput('job');
	console.log({job});

	if (job) {
		console.log('GOT JOB');
	} else {
		console.log('CONFIGURING');
	}

	core.setOutput("jobs", JSON.stringify(["first", "second", "third"]));

	const payload = JSON.stringify(github.context.payload, undefined, 2)
	console.log(`The event payload: ${payload}`);
} catch (error) {
	core.setFailed(error.message);
}
