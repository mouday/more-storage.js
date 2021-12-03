export declare class MoreStorage {
    get length(): number;
    static clear(): void;
    static getItem(key: string): string | null;
    static key(index: number): string | null;
    static removeItem(key: string): void;
    static setItem(key: string, value: any): void;
}
