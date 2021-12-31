import MarkdownComponentsService from "../services/MarkdownComponentsService";
import MarkdownImageHelper from "../helpers/MarkdownImageHelper";

const markdownImageHelper = new MarkdownImageHelper();
const markdownComponentsService = new MarkdownComponentsService(
  markdownImageHelper
);

const MarkdownComponentsEntity = {
  p: markdownComponentsService.handleParagraphRender,
};

export default MarkdownComponentsEntity;
