import * as React from "react";

type RootProps = React.ComponentPropsWithoutRef<"head">;

export type HeadProps = RootProps;

export const Head: React.FC<Readonly<HeadProps>> = ({ children, ...props }) => (
  <head {...props} data-id="__react-email-head">
    <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
    {children}
  </head>
);
