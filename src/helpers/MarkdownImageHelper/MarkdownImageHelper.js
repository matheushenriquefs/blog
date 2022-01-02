export class MarkdownImageHelper {
  getAlt(string) {
    return string.replace(/ *\{[^)]*\} */g, "");
  }

  getIsPriority(string) {
    return string.toLowerCase().includes("{priority}");
  }

  getImgDimensions(string) {
    const metaWidthMetaHeight = this.getMetaWidthMetaHeight(string);

    if (metaWidthMetaHeight) {
      return {
        width: this.getWidth(metaWidthMetaHeight),
        height: this.getHeight(metaWidthMetaHeight),
      };
    }

    return null;
  }

  getWidth(string) {
    return string.split("x")[0];
  }

  getHeight(string) {
    return string.split("x")[1];
  }

  getMetaWidthMetaHeight(string) {
    const matched = string.match(/\{\d+x\d+\}/g);
    return matched ? matched[0].replace(/[{-}]/g, "") : "";
  }
}
