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

import { HoverProvider, TokenKind } from "./hover_provider";
import * as basicHoverInformation from "./basic_hover_information";
import { Hover } from "vscode";

export default class BasicHoverProvider extends HoverProvider {
	getTokenHoverInformation(tokenKind: TokenKind): Hover | undefined {
		switch (tokenKind) {
			case TokenKind.assertWorktopContains:
				return new Hover(basicHoverInformation.assertWorktopContains);
			case TokenKind.assertWorktopContainsByAmount:
				return new Hover(
					basicHoverInformation.assertWorktopContainsByAmount
				);
			case TokenKind.assertWorktopContainsByIds:
				return new Hover(
					basicHoverInformation.assertWorktopContainsByIds
				);
			case TokenKind.callFunction:
				return new Hover(basicHoverInformation.callFunction);
			case TokenKind.callMethod:
				return new Hover(basicHoverInformation.callMethod);
			case TokenKind.callMethodWithAllResources:
				return new Hover(
					basicHoverInformation.callMethodWithAllResources
				);
			case TokenKind.clearAuthZone:
				return new Hover(basicHoverInformation.clearAuthZone);
			case TokenKind.cloneProof:
				return new Hover(basicHoverInformation.cloneProof);
			case TokenKind.createProofFromAuthZone:
				return new Hover(basicHoverInformation.createProofFromAuthZone);
			case TokenKind.createProofFromAuthZoneByAmount:
				return new Hover(
					basicHoverInformation.createProofFromAuthZoneByAmount
				);
			case TokenKind.createProofFromAuthZoneByIds:
				return new Hover(
					basicHoverInformation.createProofFromAuthZoneByIds
				);
			case TokenKind.dropAllProofs:
				return new Hover(basicHoverInformation.dropAllProofs);
			case TokenKind.dropProof:
				return new Hover(basicHoverInformation.dropProof);
			case TokenKind.popFromAuthZone:
				return new Hover(basicHoverInformation.popFromAuthZone);
			case TokenKind.publishPackage:
				return new Hover(basicHoverInformation.publishPackage);
			case TokenKind.pushToAuthZone:
				return new Hover(basicHoverInformation.pushToAuthZone);
			case TokenKind.returnToWorktop:
				return new Hover(basicHoverInformation.returnToWorktop);
			case TokenKind.takeFromWorktop:
				return new Hover(basicHoverInformation.takeFromWorktop);
			case TokenKind.takeFromWorktopByAmount:
				return new Hover(basicHoverInformation.takeFromWorktopByAmount);
			case TokenKind.takeFromWorktopByIds:
				return new Hover(basicHoverInformation.takeFromWorktopByIds);
			default:
				return undefined;
		}
	}
}
