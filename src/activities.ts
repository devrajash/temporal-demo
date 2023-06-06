// @@@SNIPSTART typescript-hello-activity
export async function greet(name: string): Promise<string> {
  return `Hello, ${name}!`;
}

export async function greetManipulate(name: string): Promise<string> {
  return `${name}! How are You?`;
}
// @@@SNIPEND
