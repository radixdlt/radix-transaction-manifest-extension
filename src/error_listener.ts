import {
    ANTLRErrorListener,
    CommonToken,
    RecognitionException,
    Recognizer,
} from "antlr4ts";
import { Range } from "vscode";

export interface ManifestError {
    range: Range;
    message: string;
}

export class ManifestErrorListener implements ANTLRErrorListener<any> {
    private errors: ManifestError[] = [];

    /**
     * This method is called when an error is encountered. It is called with all of the information about that error
     */
    syntaxError(
        recognizer: Recognizer<any, any>,
        offendingSymbol: any,
        line: number,
        charPositionInLine: number,
        message: string,
        e: RecognitionException | undefined
    ): void {
        let offending: CommonToken = offendingSymbol;
        let offendingTokenLength: number =
            offending.stopIndex - offending.startIndex;
        this.errors.push({
            range: new Range(
                offending.line - 1,
                offending.charPositionInLine,
                offending.line - 1,
                offending.charPositionInLine + offendingTokenLength + 1
            ),
            message,
        });
    }

    getErrors(): ManifestError[] {
        return this.errors;
    }
}
