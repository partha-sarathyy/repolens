export interface CodeFile {
    path: string;
    language: string;
    content: string;
    hash?: string;
}

export type chunkType =
    | "class"
    | "function"
    | "method"
    | "variable"
    | "interface"
    | "type"
    | "enum"
    | "module"
    | "unknown";


export interface Chunk {
    id: string;
    filePath: string;
    startLine: number;
    endLine: number;
    content: string;
    type: chunkType;    
}
