"use strict";

import {
  ManifestInstructionContext,
  ManifestContext,
} from "./TransactionManifestParser";
import { TransactionManifestListener } from "./TransactionManifestListener";
import { Position, Range } from "vscode";
import { Token } from "antlr4ts";

export class ManifestInstructionListener
  implements TransactionManifestListener
{
  manifestInstructionRanges: Range[] = [];

  enterManifestInstruction(context: ManifestInstructionContext) {
    let start: Token = context._start;
    let end: Token | undefined = context._stop;

    // Since we will be using this to format the document, we wish to ignore all cases where there is no defined
    // end. The only thing we care about are defined ends.
    if (end) {
      let startLine: number = start.line;
      let startChar: number = start.charPositionInLine;
      let startPosition: Position = new Position(startLine - 1, startChar);

      let endLine: number = end.line;
      let endChar: number = end.charPositionInLine;
      let endPosition: Position = new Position(endLine - 1, endChar + 2);

      let range: Range = new Range(startPosition, endPosition);
      this.manifestInstructionRanges.push(range);
    } else {
      console.log(
        "Was not able to find an end for an instruction beginning at:",
        start
      );
    }
  }
}
