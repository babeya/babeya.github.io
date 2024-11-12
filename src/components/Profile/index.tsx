import React, { useState, useEffect, useContext } from "react";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { FormattedMessage, useIntl } from "react-intl";

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
import ProfileLink from "./ProfileLink";
import LanguageSelect from "./LanguageSelect";

export default function HeroSection() {
  const [glitchText, setGlitchText] = useState(NAME);
  const { lang } = useContext(LangContext);
  const intl = useIntl();

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitched = NAME.split("")
        .map((char) =>
          Math.random() > 0.7
            ? String.fromCharCode(
                char.charCodeAt(0) + Math.floor(Math.random() * 10) - 5
              )
            : char
        )
        .join("");
      setGlitchText(glitched);
    }, 500);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjEyMTIxIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzMTMxMzEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10"></div>

      <div className="absolute top-4 right-4 z-20">
        <LanguageSelect
          onChange={(value) => {
            value === "en"
              ? window.location.replace("https://www.ababey.com/en")
              : window.location.replace("https://www.ababey.com");
          }}
          value={lang}
        />
      </div>

      <div className="z-10 text-center space-y-8 px-4">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-neon-green font-mono"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {glitchText}
        </motion.h1>
        <div className="text-2xl md:text-3xl text-purple-400 font-mono">
          <TypeAnimation
            sequence={[
              `<${intl.formatMessage(GENERAL_MESSAGES.title)} />`,
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>
        <motion.p
          className="text-neon-green text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {TRANSLATED_GENERAL_MESSAGES.aboutContent}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ProfileLink
            icon={<EnvelopeClosedIcon />}
            href={EMAIL_LINK}
            text={EMAIL}
          />
          <ProfileLink
            href={GITHUB}
            target="_blank"
            icon={<GitHubLogoIcon />}
            text="babeya"
          />
          <ProfileLink
            href={LINKEDIN}
            target="_blank"
            icon={<LinkedInLogoIcon />}
            text="a-babey"
          />
        </motion.div>
      </div>
    </section>
  );
}
