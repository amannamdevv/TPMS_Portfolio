const { spawn } = require('child_process');

// Build first to ensure dist is up to date
console.log("Starting deployment...");

const child = spawn('npx.cmd', ['surge', './dist', 'shrotitpmsdemo2026.surge.sh'], {
  stdio: ['pipe', 'pipe', 'pipe']
});

child.stdout.on('data', (data) => {
  const output = data.toString();
  process.stdout.write(output);
  
  if (output.includes('email:')) {
    child.stdin.write('shrotitpmsdemo2026@mailinator.com\n');
  }
  if (output.toLowerCase().includes('password:')) {
    child.stdin.write('Shroti123!@#\n');
  }
});

child.stderr.on('data', (data) => {
  process.stderr.write(data.toString());
});

child.on('close', (code) => {
  console.log(`\nDeployment process exited with code ${code}`);
});
