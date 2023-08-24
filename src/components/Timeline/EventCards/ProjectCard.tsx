import React from "react";

import { TranslatedDate, TranslatedMarkdown } from "../../Translation";
import EditorBlock from "../../EditorBlock";
import { StartTag, EndTag, InlineTagsBlock, TagsBlock } from "../../Tag";

type Props = { project: Queries.ProjectsJson; selectedTags: string[] };

const ProjectCard = ({
  project: { name, desc, type, tags, start, link },
  selectedTags,
}: Props) => (
  <React.Fragment>
    <StartTag
      name="project"
      level={0}
      lineNumberText={<TranslatedDate date={start} />}
    />
    <InlineTagsBlock name="name" level={1}>
      {name}
    </InlineTagsBlock>
    <InlineTagsBlock name="type" level={1}>
      {type}
    </InlineTagsBlock>
    <TagsBlock name="desc" level={1}>
      <EditorBlock level={2}>
        {/* @ts-ignore */}
        <TranslatedMarkdown content={desc} />
      </EditorBlock>
    </TagsBlock>
    <EndTag name="project" level={0} />
  </React.Fragment>
);

export default ProjectCard;
