import { existsSync, readFileSync } from 'fs';

export function readmeFile(name: string): string {
  if (existsSync('README.md')) {
    return readFileSync('README.md', { encoding: 'utf-8' });
  }

  const readme = [
    `# ${name}`,
    '',
    '',
  ].join('\n');

  return readme;
}