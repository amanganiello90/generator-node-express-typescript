import * as dotenv from 'dotenv';
export default function applyConfig(envPath: string): void {
  const env = dotenv.config({ path: envPath });

  if (env.error) {
    throw env.error;
  }
  const result = env.parsed || {};
  envVariableDefined('SERVER_PORT', result.SERVER_PORT);
  envVariableDefined('SERVER_HOST', result.SERVER_HOST);

  console.log('Process env variables loaded: ', result);

  return;
}
function envVariableDefined(name: string, value: string): void {
  if (value == null || value === '') {
    throw new Error(
      'the ' +
        name +
        ' env process variable is not defined in your config.env file'
    );
  }
  return;
}
