import Image from 'next/image';

export default class MarkdownComponentsService {
    constructor(markdownImageHelper) {
        this.markdownImageHelper = markdownImageHelper;
    }

    handleParagraphRender = (paragraph) => {
        const { node } = paragraph;
        
        if (node.children[0].tagName === 'img') {
            const image = node.children[0];
            let dimensions = this.markdownImageHelper.getImgDimensions(image.properties.alt);

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
                    alt={this.markdownImageHelper.getAlt(image.properties.alt)}
                    priority={this.markdownImageHelper.getIsPriority(image.properties.alt)}
                />
            )
        }

        return <p>{paragraph.children}</p>
    }
}
