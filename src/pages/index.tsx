import React from "react";

import { Page, Timeline, Profile, AboutSite } from "../components";

const Index = (
  { pageContext }: any // TODO: types
) => (
  <Page lang={pageContext.lang || "fr"}>
    <Profile />
    <Timeline />
    <AboutSite />
  </Page>
);
export default Index;
