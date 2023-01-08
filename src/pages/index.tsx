import React from "react";

import { Page, Timeline, Profile } from "../components";

const Index = ({ pageContext, ...rest }: any) => (
  <Page lang={pageContext.lang || "fr"}>
    <Profile />
    <Timeline />
  </Page>
);
export default Index;
