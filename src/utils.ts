// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at

//   http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.   

"use strict";

import * as cp from "child_process";
import * as vscode from "vscode";

export function executeShell(...args: string[]): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		cp.exec(args.join(" "), (err, out) => {
			return err ? reject(err) : resolve(out);
		});
	});
}

export function getTerminal(terminalName: string): vscode.Terminal | undefined {
	let terminals: readonly vscode.Terminal[] = vscode.window.terminals;
	let matchingNameIndex: number = terminals
		.map((x) => x.name === terminalName)
		.indexOf(true);

	if (matchingNameIndex !== -1) {
		return terminals[matchingNameIndex];
	} else {
		return undefined;
	}
}
