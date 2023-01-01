import React from "react";

import { Page, Timeline } from "../components";

const Index = ({ pageContext, ...rest }: any) => (
  <Page lang={pageContext.lang || "fr"}>
    <Timeline />
  </Page>
);
export default Index;
