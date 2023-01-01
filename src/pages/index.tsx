import React from "react";

import { Page, Timeline } from "../components";

import { graphql } from "gatsby";

const Index = ({ pageContext }: any) => {
  console.log(pageContext);
  return (
    <Page lang={pageContext.lang}>
      <Timeline />
    </Page>
  );
};

export default Index;

export const Head = () => <></>;
