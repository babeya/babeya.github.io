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
    <section className="w-full border-t border-border bg-muted/45 py-16">
      <div className="container mx-auto px-5 sm:px-8">
        <Card className="border-border bg-card/80 shadow-sm">
          <CardHeader>
            <CardTitle
              className="mb-2 text-2xl font-semibold tracking-normal"
              data-text="About This Site"
            >
              <FormattedMessage
                id="aboutSite.title"
                defaultMessage="À propos de ce site"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p className="mb-5 max-w-4xl leading-7">
              <FormattedMessage
                id="aboutSite.description"
                defaultMessage="Ce site a été conçu pour présenter mon parcours, mes compétences et mes projets de manière simple et efficace. Il est construit avec des technologies modernes qui garantissent performance et maintenabilité :"
              />
            </p>
            <ul className="mb-5 grid list-none gap-3 sm:grid-cols-2">
              {TECHS.map(({ name, description, url }, index) => (
                <li key={index} className="flex items-start gap-2 leading-7">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Badge className="font-medium">{name}</Badge>
                  </a>
                  {description}
                </li>
              ))}
            </ul>

            <p className="mb-5 max-w-4xl leading-7">
              <FormattedMessage
                id="aboutSite.sourceCode"
                defaultMessage="Le code source de ce site est disponible sur GitHub, n’hésitez pas à y jeter un coup d’œil pour découvrir les aspects techniques de sa réalisation."
              />
            </p>
            <a
              href="https://github.com/babeya/babeya.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary px-4 py-2 text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
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
