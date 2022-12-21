import classnames from 'classnames';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { IconButton } from './icon-button';
import { IconClipboard } from './icon-clipboard';
import { IconDownload } from './icon-download';
import { IconCheck } from './icon-check';
import { copyTextToClipboard } from '../utils';
import { Tooltip } from './tooltip';
import * as React from 'react';

interface CodeProps {
  children: any;
  className?: string;
  language?: Language;
}

const theme = {
  plain: {
    color: '#EDEDEF',
    fontSize: 13,
    fontFamily: 'MonoLisa, Menlo, monospace',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: '#706F78',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#7E7D86',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#706F78',
      },
    },
    {
      types: ['class-name', 'function', 'tag', 'key-white'],
      style: {
        color: '#EDEDEF',
      },
    },
  ],
};

export const Code: React.FC<Readonly<CodeProps>> = ({
  children,
  className,
  language = 'html',
  ...props
}) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const value = children.trim();

  const file = new File([value], `email.${language}`);
  const url = URL.createObjectURL(file);

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={value}
      language={language as Language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre
          className={classnames(
            'border-slate-6 relative w-full items-center overflow-auto whitespace-pre rounded-md border text-sm backdrop-blur-md',
            className,
          )}
          style={{
            lineHeight: '130%',
            background:
              'linear-gradient(145.37deg, rgba(255, 255, 255, 0.09) -8.75%, rgba(255, 255, 255, 0.027) 83.95%)',
            boxShadow: 'rgb(0 0 0 / 10%) 0px 5px 30px -5px',
          }}
        >
          <div className="h-9 border-b border-slate-6">
            <div className="py-[10px] px-4 text-xs">
              {language === 'jsx' ? 'React' : 'HTML'}
            </div>
            <Tooltip>
              <Tooltip.Trigger className="absolute top-2 right-2 hidden md:block">
                <IconButton
                  onClick={async () => {
                    setIsCopied(true);
                    await copyTextToClipboard(value);
                    setTimeout(() => setIsCopied(false), 3000);
                  }}
                >
                  {isCopied ? <IconCheck /> : <IconClipboard />}
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Content>Copy to Clipboard</Tooltip.Content>
            </Tooltip>

            <Tooltip>
              <Tooltip.Trigger className="text-gray-11 absolute top-2 right-8 hidden md:block">
                <a href={url} download={file.name}>
                  <IconDownload />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Content>Download</Tooltip.Content>
            </Tooltip>
          </div>

          <div
            className="absolute right-0 top-0 h-px w-[200px]"
            style={{
              background:
                'linear-gradient(90deg, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0) 0%, rgba(232, 232, 232, 0.2) 33.02%, rgba(143, 143, 143, 0.6719) 64.41%, rgba(236, 72, 153, 0) 98.93%)',
            }}
          />
          <div className="p-4">
            {tokens.map((line, i) => {
              return (
                <div
                  key={i}
                  {...getLineProps({ line, key: i })}
                  className={classnames('whitespace-pre', {
                    "before:text-slate-11 before:mr-2 before:content-['$']":
                      language === 'bash' && tokens && tokens.length === 1,
                  })}
                >
                  {line.map((token, key) => {
                    const isException =
                      token.content === 'from' &&
                      line[key + 1]?.content === ':';
                    const newTypes = isException
                      ? [...token.types, 'key-white']
                      : token.types;
                    token.types = newTypes;

                    return (
                      <React.Fragment key={key}>
                        <span {...getTokenProps({ token, key })} />
                      </React.Fragment>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div
            className="absolute left-0 bottom-0 h-px w-[200px]"
            style={{
              background:
                'linear-gradient(90deg, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0) 0%, rgba(232, 232, 232, 0.2) 33.02%, rgba(143, 143, 143, 0.6719) 64.41%, rgba(236, 72, 153, 0) 98.93%)',
            }}
          />
        </pre>
      )}
    </Highlight>
  );
};
