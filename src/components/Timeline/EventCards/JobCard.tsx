import React from "react";

import { FormattedMessage } from "react-intl";
import { TranslatedDate, TranslatedMarkdown } from "../../Translation";
import { StartTag, EndTag, TagsBlock, InlineTagsBlock } from "../../Tag";
import EditorBlock from "../../EditorBlock";

type Props = { job: Queries.JobsJson; selectedTags: string[] };

const TRANSLATED_TITLE: { [key: string]: React.ReactNode } = {
  mobile: (
    <FormattedMessage
      id="job-title.mobile"
      defaultMessage="Développeur Mobile"
    />
  ),
  front: (
    <FormattedMessage
      id="job-title.front"
      defaultMessage="Développeur Front-end"
    />
  ),
  fullStack: (
    <FormattedMessage
      id="job-title.fullStack"
      defaultMessage="Développeur Full-Stack"
    />
  ),
  tv: (
    <FormattedMessage
      id="job-title.tv"
      defaultMessage="Développeur TV / Console"
    />
  ),
  integrator: (
    <FormattedMessage
      id="job-title.integrator"
      defaultMessage="Intégrateur Front-end"
    />
  ),
};

const TRANSLATED_JOB_TYPE: { [key: string]: React.ReactNode } = {
  mission: <FormattedMessage id="job-type.mission" defaultMessage="Mission" />,
  internship: (
    <FormattedMessage id="job-type.internship" defaultMessage="Stage" />
  ),
  openEnded: <FormattedMessage id="job-type.openEnded" defaultMessage="CDI" />,
};

const JobCard = ({
  job: { company, desc, type, link, title, colors, tags, start, end },
  selectedTags,
}: Props) => (
  <React.Fragment>
    <StartTag
      name="Job"
      level={0}
      lineNumberText={<TranslatedDate date={start} />}
    />
    <InlineTagsBlock name="company" level={1}>
      {company}
    </InlineTagsBlock>
    <InlineTagsBlock name="title" level={1}>
      {title && TRANSLATED_TITLE[title] ? TRANSLATED_TITLE[title] : title}
    </InlineTagsBlock>
    <InlineTagsBlock name="contract" level={1}>
      {type && TRANSLATED_JOB_TYPE[type] ? TRANSLATED_JOB_TYPE[type] : type}
    </InlineTagsBlock>
    <TagsBlock name="desc" level={1}>
      <EditorBlock level={2}>
        {/* @ts-ignore */}
        <TranslatedMarkdown content={desc} />
      </EditorBlock>
    </TagsBlock>
    <EndTag name="Job" level={0} />
  </React.Fragment>
);

export default JobCard;
