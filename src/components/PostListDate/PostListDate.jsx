import React from 'react';

import { useUserSettingsContext } from '../../contexts/UserSettings';
import IntlService from '../../services/IntlService';

export const PostListDate = ({ date, ...props }) => {
    const { settings } = useUserSettingsContext();
    const hasLocale = settings.locale;
    const intlService = new IntlService();
    let localeDateOptions = {
        month: 'short',
        day: 'numeric',
    }
    const postDate = hasLocale && intlService.getLocalePostDate(date, settings.locale, localeDateOptions);

    return (
        <>
           {postDate && (
               <time className="d-block" dateTime={postDate} {...props}>{postDate}</time>
           )}
        </>
    )
};
