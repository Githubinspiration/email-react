'use server';
import path from 'node:path';
import fs from 'node:fs';
import { emailsDirectoryAbsolutePath } from '../utils/emails-directory-absolute-path';

// eslint-disable-next-line @typescript-eslint/require-await
export const getEmailPathFromSlug = async (slug: string) => {
  if (['.tsx', '.jsx', '.js'].includes(path.extname(slug)))
    return path.join(emailsDirectoryAbsolutePath, slug);

  const pathWithoutExtension = path.join(emailsDirectoryAbsolutePath, slug);

  if (fs.existsSync(`${pathWithoutExtension}.tsx`)) {
    return `${pathWithoutExtension}.tsx`;
  } else if (fs.existsSync(`${pathWithoutExtension}.jsx`)) {
    return `${pathWithoutExtension}.jsx`;
  } else if (fs.existsSync(`${pathWithoutExtension}.js`)) {
    return `${pathWithoutExtension}.jsx`;
  }

  throw new Error(
    `Could not find your email file based on the slug by guessing the file extension. Tried .tsx, .jsx and .js.

    This is most likely not an issue with the preview server. It most likely is that the email doesn't exist.`,
  );
};
