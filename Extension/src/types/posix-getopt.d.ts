/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All Rights Reserved.
 * See 'LICENSE' in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

declare module 'posix-getopt' {
    export interface IParsedOption {
        error: boolean;
        option: string;
        optarg: string;
        optopt?: string;
    }

    export class BasicParser {
        constructor(template: string, arguments: ReadonlyArray<string>, skipArgs?: number);
        getopt(): IParsedOption | void;
        optind(): number;
    }
}
