# more-storage

基于 localStorage 支持 json 数据的存取库，和 localStorage 具有一致的 API

npm: [https://www.npmjs.com/package/more-storage](https://www.npmjs.com/package/more-storage)

install

```
npm i more-storage
```

```html
<script src="https://cdn.jsdelivr.net/npm/more-storage@1.0.1/dist/more-storage.min.js"></script>

<script>
  moreStorage.setItem('key', 'value');
  let value = moreStorage.getItem('key');
  console.log(value);
</script>
```

支持的方式

```js
export declare class MoreStorage {
    get length(): number;
    static clear(): void;
    static getItem(key: string): string | null;
    static key(index: number): string | null;
    static removeItem(key: string): void;
    static setItem(key: string, value: any): void;
}

```

开发环境：

```
node >= v12.13.0
```
