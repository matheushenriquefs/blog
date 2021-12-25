export default class IntlService {
    getLocale() {
        return navigator.userLanguage || (navigator.languages && navigator.languages.length && navigator.languages[0]) || navigator.language || navigator.browserLanguage || navigator.systemLanguage || 'en';
    }

    getLocaleDate(date, locale = 'en', options = null) {
        return new Intl.DateTimeFormat(locale, options ? options : {}).format(new Date(`${date} 00:00`))
    }

    getLocaleDateOptions(date, options) {
        const currentDate = new Date();
        const postDate = new Date(date);
        const isSameYear = currentDate.getUTCFullYear() === postDate.getUTCFullYear();

        if (!isSameYear) options.year = 'numeric';

        return options;
    }

    getLocalePostDate(date, locale, options) {
        return this.getLocaleDate(date, locale, this.getLocaleDateOptions(date, options));
    }
}
