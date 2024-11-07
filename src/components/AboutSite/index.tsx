import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

export default function AboutSiteSection() {
  const technologies = [
    "React",
    "TypeScript",
    "Gatsby",
    "Tailwind CSS",
    "ShadCN UI",
  ];

  return (
    <section className="w-full py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <Card className="bg-gray-900 border-green-500 border-2 shadow-lg shadow-green-500/20">
          <CardHeader>
            <CardTitle
              className="text-3xl font-bold text-green-400 mb-4 glitch"
              data-text="About This Site"
            >
              About This Site
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 font-mono">
            <p className="mb-4">
              This site was designed to showcase my background, skills, and
              projects in a simple and effective way. It's built with modern
              technologies that ensure performance and maintainability:
            </p>
            <ul className="list-none space-y-2 mb-4">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center">
                  <Badge
                    variant="outline"
                    className="mr-2 bg-purple-700 text-purple-100"
                  >
                    {tech}
                  </Badge>
                  {tech === "React" && "for a dynamic user interface."}
                  {tech === "TypeScript" &&
                    "providing reliable, statically typed code."}
                  {tech === "Gatsby" &&
                    "a fast, efficient static site generator."}
                  {tech === "Tailwind CSS" &&
                    "for a modern and adaptive design."}
                  {tech === "ShadCN UI" &&
                    "elegant components for a cohesive interface."}
                </li>
              ))}
            </ul>
            <p className="mb-4">
              The source code for this site is available on GitHub. Feel free to
              take a look to explore its technical details.
            </p>
            <a
              href="https://github.com/yourusername/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-purple-100 rounded hover:bg-purple-700 transition-colors duration-200"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
