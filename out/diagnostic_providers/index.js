"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralDiagnosticsProvider = exports.LexerDiagnosticsProvider = exports.ParsingDiagnosticsProvider = exports.NumbersDiagnosticsProvider = exports.AddressesDiagnosticProvider = exports.IdValidationDiagnosticsProvider = void 0;
var id_validation_diagnostics_provider_1 = require("./id_validation_diagnostics_provider");
Object.defineProperty(exports, "IdValidationDiagnosticsProvider", { enumerable: true, get: function () { return id_validation_diagnostics_provider_1.default; } });
var addresses_diagnostics_provider_1 = require("./addresses_diagnostics_provider");
Object.defineProperty(exports, "AddressesDiagnosticProvider", { enumerable: true, get: function () { return addresses_diagnostics_provider_1.default; } });
var numbers_diagnostics_provider_1 = require("./numbers_diagnostics_provider");
Object.defineProperty(exports, "NumbersDiagnosticsProvider", { enumerable: true, get: function () { return numbers_diagnostics_provider_1.default; } });
var parsing_diagnostics_provider_1 = require("./parsing_diagnostics_provider");
Object.defineProperty(exports, "ParsingDiagnosticsProvider", { enumerable: true, get: function () { return parsing_diagnostics_provider_1.default; } });
var lexer_diagnostics_provider_1 = require("./lexer_diagnostics_provider");
Object.defineProperty(exports, "LexerDiagnosticsProvider", { enumerable: true, get: function () { return lexer_diagnostics_provider_1.default; } });
var general_diagnostics_provider_1 = require("./general_diagnostics_provider");
Object.defineProperty(exports, "GeneralDiagnosticsProvider", { enumerable: true, get: function () { return general_diagnostics_provider_1.default; } });
//# sourceMappingURL=index.js.map