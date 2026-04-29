import React, { useContext } from "react";

import { motion } from "framer-motion";

import { useIntl } from "react-intl";

import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

import {
  TRANSLATED_GENERAL_MESSAGES,
  GENERAL_MESSAGES,
} from "../CommonFormattedMessage";

import { EMAIL, EMAIL_LINK, GITHUB, LINKEDIN, NAME } from "../../config";
import { LangContext } from "../Translation";
import { ThemeToggle } from "../Theme";
import ProfileLink from "./ProfileLink";
import LanguageSelect from "./LanguageSelect";

export default function HeroSection() {
  const { lang } = useContext(LangContext);
  const intl = useIntl();
  const title = intl.formatMessage(GENERAL_MESSAGES.title);

  return (
    <section className="relative min-h-[92svh] overflow-hidden border-b border-border bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.10),transparent_34%),linear-gradient(180deg,hsl(var(--page-bg)),hsl(var(--background)))] dark:bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.16),transparent_32%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--muted)/0.35))]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.035)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.035)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <div className="absolute right-4 top-4 z-20 flex items-center gap-2 sm:right-6 sm:top-6">
        <ThemeToggle />
        <LanguageSelect
          onChange={(value) => {
            try {
              // @ts-ignore
              window.umami.track("Language Change", {
                lang: value,
              });
            } catch (err) {
              console.error(err);
            }
            value === "en"
              ? window.location.replace("https://www.ababey.com/en")
              : window.location.replace("https://www.ababey.com");
          }}
          value={lang}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92svh] w-full max-w-6xl items-center px-5 py-28 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-8">
          <motion.p
            className="inline-flex items-center border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Portfolio / resume
          </motion.p>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <h1 className="text-5xl font-semibold leading-none tracking-normal text-foreground sm:text-6xl md:text-7xl">
              {NAME}
            </h1>
            <p className="max-w-2xl text-balance text-xl leading-8 text-primary md:text-2xl">
              &lt;{title} /&gt;
            </p>
          </motion.div>
          <motion.p
            className="max-w-2xl text-pretty text-base leading-8 text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
          >
            {TRANSLATED_GENERAL_MESSAGES.aboutContent}
          </motion.p>
          <motion.div
            className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            <ProfileLink
              icon={<EnvelopeClosedIcon className="h-5 w-5" />}
              href={EMAIL_LINK}
              text={EMAIL}
            />
            <ProfileLink
              href={GITHUB}
              target="_blank"
              icon={<GitHubLogoIcon className="h-5 w-5" />}
              text="babeya"
            />
            <ProfileLink
              href={LINKEDIN}
              target="_blank"
              icon={<LinkedInLogoIcon className="h-5 w-5" />}
              text="a-babey"
            />
          </motion.div>
        </div>
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 right-8 hidden w-72 border border-border bg-card/70 p-5 text-left shadow-sm backdrop-blur lg:block"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            stack
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm text-foreground">
            <span>React</span>
            <span>TypeScript</span>
            <span>Next.js</span>
            <span>React Native</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
