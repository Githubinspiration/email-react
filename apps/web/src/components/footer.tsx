import Image from "next/image";
import * as React from "react";
import { Anchor } from "./anchor";
import { Text } from "./text";

export const Footer: React.FC = () => (
  <footer className="flex h-[80px] items-center justify-center text-center">
    <Text className="inline-flex items-center gap-2">
      Brought to you by{" "}
      <Anchor
        appearance="white"
        className="inline-flex items-center gap-2"
        href="https://resend.com"
        target="_blank"
      >
        <Image
          alt=""
          className="border-slate-7 inline-block rounded-full border"
          height="20"
          src="/static/resend.png"
          width="20"
        />
        Resend
      </Anchor>
    </Text>
  </footer>
);
