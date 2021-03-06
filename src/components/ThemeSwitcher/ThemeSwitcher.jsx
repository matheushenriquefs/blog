import React, { useEffect, useCallback } from "react";

import { useUserSettingsContext } from "../../contexts/UserSettings";
import SunIcon from "../../../public/icons/sun.svg";
import MoonIcon from "../../../public/icons/moon.svg";

export const ThemeSwitcher = () => {
  const { settings, setSettings } = useUserSettingsContext();

  const handleThemeSwitchEffect = useCallback(async () => {
    const { body } = document;
    settings.theme.dark
      ? body.classList.add("dark-theme")
      : body.classList.remove("dark-theme");
  }, [settings.theme.dark]);

  const handleThemeSwitchClick = async () =>
    setSettings((prevState) => {
      return {
        ...prevState,
        theme: {
          dark: !prevState.theme.dark,
        },
      };
    });

  useEffect(
    () => handleThemeSwitchEffect(),
    [handleThemeSwitchEffect, settings]
  );

  return (
    <>
      <div
        className="theme-switcher"
        onClick={async () => handleThemeSwitchClick()}
      >
        {settings.theme.dark ? (
          <SunIcon role="img" aria-label="sun-icon" className="theme-icon" />
        ) : (
          <MoonIcon role="img" aria-label="moon-icon" className="theme-icon" />
        )}
      </div>
      <style jsx>{`
        .theme-switcher {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
