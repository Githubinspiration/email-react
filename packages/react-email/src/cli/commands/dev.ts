import fs from 'node:fs';
import { startDevServer, setupHotreloading } from '../utils';

interface Args {
  dir: string;
  port: string;
}

export const dev = async ({ dir: emailsDirRelativePath, port }: Args) => {
  try {
    if (!fs.existsSync(emailsDirRelativePath)) {
      throw new Error(`Missing ${emailsDirRelativePath} folder`);
    }

    const devServer = await startDevServer(
      emailsDirRelativePath,
      './emails', // defualts to ./emails/static for the static files that are served to the preview
      parseInt(port),
    );

    setupHotreloading(devServer, emailsDirRelativePath);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
