export class MoreStorage {
  get length(): number {
    return localStorage.length;
  }

  static clear(): void {
    localStorage.clear();
  }

  static getItem(key: string): string | null {
    let value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    } else {
      return value;
    }
  }

  static key(index: number): string | null {
    return localStorage.key(index);
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  static setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
