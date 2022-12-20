import React from "react";

import { Page, Timeline } from "../components";

import { graphql } from "gatsby";

const Index = ({ data }: any) => {
  return (
    <Page>
      <Timeline />
    </Page>
  );
};

export default Index;

export const Head = () => (
  <>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <title>BABEY A.</title>
  </>
);
