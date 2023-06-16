import { StylesType, parseMarkdownToReactEmailJSX } from "md-to-react-email";
import * as React from "react";

type MarkdownElement = React.ElementRef<"div">;

interface MarkdownProps {
  children: string;
  markdownCustomStyles?: StylesType;
  markdownContainerStyles?: React.CSSProperties;
}

export const Markdown = React.forwardRef<MarkdownElement, MarkdownProps>(
  (
    { children, markdownContainerStyles, markdownCustomStyles, ...props },
    forwardedRef
  ) => {
    const parsedMarkdown = parseMarkdownToReactEmailJSX(
      children,
      markdownCustomStyles
    );

    return (
      <div
        {...props}
        ref={forwardedRef}
        data-id="react-email-markdown"
        style={markdownContainerStyles}
        dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
      />
    );
  }
);

Markdown.displayName = "Markdown";
