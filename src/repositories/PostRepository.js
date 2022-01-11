import fs from "fs";
import { promisify } from "util";

export default class PostRepository {
  constructor() {
    this.readFile = promisify(fs.readFile);
    this.readDir = promisify(fs.readdir);
    this.createReadStream = fs.createReadStream;
  }
}
