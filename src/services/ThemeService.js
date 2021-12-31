export default class ThemeService {
  getTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
}
