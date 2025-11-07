import React from "react";

import { FormattedMessage } from "react-intl";

import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TECHS = [
  {
    name: "React",
    description: (
      <FormattedMessage
        id="aboutSite.react"
        defaultMessage="pour une interface utilisateur dynamique."
      />
    ),
    url: "https://react.dev",
  },
  {
    name: "TypeScript",
    description: (
      <FormattedMessage
        id="aboutSite.typescript"
        defaultMessage="qui permet un code fiable avec le typage statique."
      />
    ),
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Gatsby",
    description: (
      <FormattedMessage
        id="aboutSite.gatsby"
        defaultMessage="générateur de site statique rapide et performant."
      />
    ),
    url: "https://www.gatsbyjs.com",
  },
  {
    name: "Tailwind CSS",
    description: (
      <FormattedMessage
        id="aboutSite.tailwind"
        defaultMessage="pour un design moderne et adaptatif."
      />
    ),
    url: "https://tailwindcss.com",
  },
  {
    name: "ShadCN UI",
    description: (
      <FormattedMessage
        id="aboutSite.shadcn"
        defaultMessage="composants élégants pour une interface harmonieuse."
      />
    ),
    url: "https://ui.shadcn.com",
  },
  {
    name: "React-pdf",
    description: (
      <FormattedMessage
        id="aboutSite.reactpdf"
        defaultMessage="pour afficher et générer des documents PDF directement sur le site."
      />
    ),
    url: "https://react-pdf.org",
  },
];

export default function AboutSiteSection() {
  return (
    <section className="w-full py-12 bg-slate-800">
      <div className="container mx-auto px-4">
        <Card className="bg-slate-900 border-slate-700 border-2 shadow-lg">
          <CardHeader>
            <CardTitle
              className="text-3xl font-bold text-slate-100 mb-4"
              data-text="About This Site"
            >
              <FormattedMessage
                id="aboutSite.title"
                defaultMessage="À propos de ce site"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 font-mono">
            <p className="mb-4">
              <FormattedMessage
                id="aboutSite.description"
                defaultMessage="Ce site a été conçu pour présenter mon parcours, mes compétences et mes projets de manière simple et efficace. Il est construit avec des technologies modernes qui garantissent performance et maintenabilité :"
              />
            </p>
            <ul className="list-none space-y-2 mb-4">
              {TECHS.map(({ name, description, url }, index) => (
                <li key={index} className="flex items-center">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Badge className="bg-blue-600 hover:bg-blue-500 text-white font-mono mr-2">
                      {name}
                    </Badge>
                  </a>
                  {description}
                </li>
              ))}
            </ul>

            <p className="mb-4">
              <FormattedMessage
                id="aboutSite.sourceCode"
                defaultMessage="Le code source de ce site est disponible sur GitHub, n’hésitez pas à y jeter un coup d’œil pour découvrir les aspects techniques de sa réalisation."
              />
            </p>
            <a
              href="https://github.com/babeya/babeya.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors duration-200"
            >
              <GitHubLogoIcon className="mr-2 h-5 w-5" />
              <FormattedMessage
                id="aboutSite.viewOnGithub"
                defaultMessage="Voir sur GitHub"
              />
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
