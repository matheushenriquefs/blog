import React, { useState, useEffect } from "react";

import { useUserSettingsContext } from "../../contexts/UserSettings";
import IntlService from "../../services/IntlService";

export const PostListDate = ({ date, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { settings } = useUserSettingsContext();
  const intlService = new IntlService();
  let localeDateOptions = {
    month: "short",
    day: "numeric",
  };

  const postDate =
    !isLoading &&
    intlService.getLocalePostDate(date, settings.locale, localeDateOptions);

  useEffect(() => settings.locale && setIsLoading(false), [settings.locale]);

  return (
    <time
      className={`d-block ${isLoading ? "placeholder-glow" : ""}`}
      dateTime={isLoading ? "" : postDate}
      aria-hidden={isLoading ? true : false}
      {...props}
    >
      <span className={isLoading ? "placeholder" : ""}>{postDate}</span>
    </time>
  );
};
