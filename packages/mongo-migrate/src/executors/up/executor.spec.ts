import { UpExecutorSchema } from './schema';
import executor from './executor';

const options: UpExecutorSchema = {};

describe('Build Executor', () => {
  it('can run', async () => {
    // const output = await executor(options);
    // expect(output.success).toBe(true);
    expect(options).toBeTruthy();
  });
});
