export default class MarkdownImageHelper {
  getAlt(string) {
    return string.replace(/ *\{[^)]*\} */g, "");
  }

  getIsPriority(string) {
    return string.toLowerCase().includes("{priority}");
  }

  getImgDimensions(string) {
    const metaWidthMetaHeight = this.getMetaWidthMetaHeight(string);

    if (metaWidthMetaHeight) {
      const sanitized = metaWidthMetaHeight.replace(/[{-}]/g, "");

      return {
        width: this.getWidth(sanitized),
        height: this.getHeight(sanitized),
      };
    }

    return false;
  }

  getWidth(string) {
    return string.split("x")[0];
  }

  getHeight(string) {
    return string.split("x")[1];
  }

  getMetaWidthMetaHeight(string) {
    const matched = string.match(/\{\d+x\d+\}/g);
    return matched ? matched[0] : false;
  }
}
