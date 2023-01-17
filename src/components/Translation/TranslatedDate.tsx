import React, { Fragment } from "react";
import { useContext } from "react";

import { DateTime } from "luxon";

import LangContext from "./LangContext";

type Props = {
  date?: string | null;
  format?: string;
};

const TranslatedDate = ({ date, format = "MMM yy" }: Props) => {
  const { lang } = useContext(LangContext);

  if (!date) {
    return null;
  }

  return (
    <Fragment>
      {DateTime.fromISO(date).setLocale(lang).toFormat(format)}
    </Fragment>
  );
};

export default TranslatedDate;
