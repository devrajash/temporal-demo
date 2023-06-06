// @@@SNIPSTART typescript-hello-workflow
import { proxyActivities } from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';
import type * as activities2 from './activities2';

const { greet, greetManipulate } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

const { greet2 } = proxyActivities<typeof activities2>({
  startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function example(name: string): Promise<string> {
  let x = await greet(name);
  return await greetManipulate(x);
}

export async function worker2WorkFlow(name: string): Promise<string> {
  return await greet2(name);
}
// @@@SNIPEND
