import React from "react";

import { Page, Timeline, Profile } from "../components";

const Index = (
  { pageContext }: any // TODO: types
) => (
  <Page lang={pageContext.lang || "fr"}>
    <Profile />
    <Timeline />
  </Page>
);
export default Index;
