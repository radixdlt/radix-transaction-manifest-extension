"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const diagnostic_providers_1 = require("../../diagnostic_providers");
const chai_1 = require("chai");
const testTextDocument = (content) => {
    // @ts-ignore
    return {
        getText: () => content
    };
};
suite("Addresses Diagnostics Provider", () => {
    test('Hex address is treated as invalid Bech32', () => {
        // Arrange
        let instruction = `CALL_METHOD ComponentAddress("031234567891234567890abcd") "hello";`;
        let textDocument = testTextDocument(instruction);
        let diagnosticsProvider = new diagnostic_providers_1.AddressesDiagnosticProvider(textDocument);
        // Act
        let diagnostics = diagnosticsProvider.getDiagnostics();
        // Assert
        (0, chai_1.expect)(diagnostics[0].message).to.equal('The address is not a valid Bech32m address.');
    });
    test('Bech32 address is an invalid Bech32m address', () => {
        // Arrange
        let instruction = `CALL_METHOD ComponentAddress("component_rdx1dp86hmk89j4q8nayxe28krxv7jfd3zu5p663nrzzqsxudwdr") "hello";`;
        let textDocument = testTextDocument(instruction);
        let diagnosticsProvider = new diagnostic_providers_1.AddressesDiagnosticProvider(textDocument);
        // Act
        let diagnostics = diagnosticsProvider.getDiagnostics();
        // Assert
        (0, chai_1.expect)(diagnostics[0].message).to.equal('The address is not a valid Bech32m address.');
    });
    test('More than two specifiers is invalid.', () => {
        // Arrange
        let instruction = `CALL_METHOD ComponentAddress("com_ponent_rdx1dp86hmk89j4q8nayxe28krxv7jfd3zu5p663nrzzqs3t5xpm") "hello";`;
        let textDocument = testTextDocument(instruction);
        let diagnosticsProvider = new diagnostic_providers_1.AddressesDiagnosticProvider(textDocument);
        // Act
        let diagnostics = diagnosticsProvider.getDiagnostics();
        // Assert
        (0, chai_1.expect)(diagnostics[0].message).to.equal('The address contains multiple specifier separators.');
    });
    test('One specifier is invalid.', () => {
        // Arrange
        let instruction = `CALL_METHOD ComponentAddress("componentrdx1dp86hmk89j4q8nayxe28krxv7jfd3zu5p663nrzzqswydqe2") "hello";`;
        let textDocument = testTextDocument(instruction);
        let diagnosticsProvider = new diagnostic_providers_1.AddressesDiagnosticProvider(textDocument);
        // Act
        let diagnostics = diagnosticsProvider.getDiagnostics();
        // Assert
        (0, chai_1.expect)(diagnostics[0].message).to.equal('The address does not contain a network and entity specifiers.');
    });
    test('Type and entity specifier mismatch should fail.', () => {
        // Arrange
        let instruction = `CALL_METHOD ComponentAddress("package_rdx1dp86hmk89j4q8nayxe28krxv7jfd3zu5p663nrzzqsu0mygp") "hello";`;
        let textDocument = testTextDocument(instruction);
        let diagnosticsProvider = new diagnostic_providers_1.AddressesDiagnosticProvider(textDocument);
        // Act
        let diagnostics = diagnosticsProvider.getDiagnostics();
        // Assert
        (0, chai_1.expect)(diagnostics[0].message).to.equal('Invalid ComponentAddress: A ComponentAddress can not have an HRP beginning in "package"');
    });
    test('Type and entity byte mismatch should fail.', () => {
        // Arrange
        let instruction = `CALL_METHOD ComponentAddress("component_rdx1dp86hmk89j4q8nayxe28krxv7jfd3zu5p663nrzzqsnqazgp") "hello";`;
        let textDocument = testTextDocument(instruction);
        let diagnosticsProvider = new diagnostic_providers_1.AddressesDiagnosticProvider(textDocument);
        // Act
        let diagnostics = diagnosticsProvider.getDiagnostics();
        // Assert
        (0, chai_1.expect)(diagnostics[0].message).to.contain('Invalid Entity Byte');
    });
    test('Inconsistent network specifiers should cause error.', () => {
        // Arrange
        let instruction = `CALL_METHOD ComponentAddress("component_rdx1qf86hmk89j4q8nayxe28krxv7jfd3zu5p663nrzzqsndq2tj") "hello" ComponentAddress("component_tdx1qf86hmk89j4q8nayxe28krxv7jfd3zu5p663nrzzqseq2hfl");`;
        let textDocument = testTextDocument(instruction);
        let diagnosticsProvider = new diagnostic_providers_1.AddressesDiagnosticProvider(textDocument);
        // Act
        let diagnostics = diagnosticsProvider.getDiagnostics();
        // Assert
        (0, chai_1.expect)(diagnostics[0].message).to.contain('Inconsistent Network Specifier');
    });
    test('No errors should succeed.', () => {
        // Arrange
        let instruction = `CALL_METHOD ComponentAddress("component_rdx1qf86hmk89j4q8nayxe28krxv7jfd3zu5p663nrzzqsndq2tj") "hello" ComponentAddress("component_rdx1qd86hmk89j4q8nayxe28krxv7jfd3zu5p663nrzzqsrewf2v");`;
        let textDocument = testTextDocument(instruction);
        let diagnosticsProvider = new diagnostic_providers_1.AddressesDiagnosticProvider(textDocument);
        // Act
        let diagnostics = diagnosticsProvider.getDiagnostics();
        // Assert
        (0, chai_1.expect)(diagnostics.length).to.equal(0);
    });
});
//# sourceMappingURL=diagnostic_providers.test.js.map