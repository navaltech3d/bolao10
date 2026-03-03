import { execSync } from 'child_process';
try {
  const output = execSync('git log -p server.ts | grep -i jackpot').toString();
  console.log(output.substring(0, 1000));
} catch (e) {
  console.log(e);
}
