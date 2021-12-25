import { createContext, useContext, useState, useEffect } from 'react';

import IntlService from '../../services/IntlService';
import ThemeService from '../../services/ThemeService';

const UserSettingsContext = createContext({});

const useUserSettingsContext = () => useContext(UserSettingsContext);

const UserSettings = ({ children }) => {
	const [settings, setSettings] = useState({
        locale: null,
        theme: {
            dark: false,
        }
    });

    useEffect(() => {
        const intlService = new IntlService();
        const themeService = new ThemeService();
        setSettings((prevState) => {
            return {
                ...prevState,
                locale: intlService.getLocale(),
                theme: {
                    dark: themeService.getTheme(),
                }
            }
        });
    }, []);

	return (
		<UserSettingsContext.Provider
			value={{
				settings,
                setSettings,
			}}
		>
			{children}
		</UserSettingsContext.Provider>
	);
};

export { UserSettings, useUserSettingsContext };
