import fs from "fs";
import path from "path";
import { themeOutputs } from "./themes";

const schema = "vscode://schemas/color-theme";
const outputDir = path.resolve(__dirname, "..", "themes");

const outputs = themeOutputs;

for (const output of outputs) {
  const themeWithSchema = { $schema: schema, ...output.theme };
  const json = JSON.stringify(themeWithSchema, null, 2);
  fs.writeFileSync(path.join(outputDir, output.fileName), json + "\n", "utf8");
}
