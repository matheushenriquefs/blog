export class StringDecoderHelper {
  constructor(IStringDecoder) {
    this.IStringDecoder = IStringDecoder;
  }

  async streamToString(stream) {
    const chunks = [];

    for await (const chunk of stream) {
      chunks.push(Buffer.from(this.IStringDecoder.write(chunk)));
    }

    return Buffer.concat(chunks).toString("utf-8");
  }
}
