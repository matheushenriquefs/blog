import Image from "next/image";

export default class MarkdownComponentsService {
  constructor(IMarkdownImageHelper) {
    this.IMarkdownImageHelper = IMarkdownImageHelper;
  }

  handleParagraphRender = (paragraph) => {
    const { node } = paragraph;

    if (node.children[0].tagName === "img") {
      const image = node.children[0];
      let dimensions = this.IMarkdownImageHelper.getImgDimensions(
        image.properties.alt
      );

      if (!dimensions) {
        dimensions.width = 128;
        dimensions.height = 128;
      }

      return (
        <Image
          src={image.properties.src}
          width={dimensions.width}
          height={dimensions.height}
          className="post-image"
          alt={this.IMarkdownImageHelper.getAlt(image.properties.alt)}
          priority={this.IMarkdownImageHelper.getIsPriority(
            image.properties.alt
          )}
        />
      );
    }

    return <p>{paragraph.children}</p>;
  };
}
