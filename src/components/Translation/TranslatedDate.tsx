import React, { Fragment } from "react";
import { useContext } from "react";

import { DateTime } from "luxon";

import LangContext from "./LangContext";

type Props = {
  date?: string | null;
  format?: string;
  local?: "en" | "fr";
};

const TranslatedDate = ({ date, format = "MMM yy", local }: Props) => {
  const { lang } = useContext(LangContext);

  if (!date) {
    return null;
  }

  return (
    <Fragment>
      {DateTime.fromISO(date)
        .setLocale(local || lang)
        .toFormat(format)}
    </Fragment>
  );
};

export default TranslatedDate;
