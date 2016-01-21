# polymer-elements-typings

Type definitions for [PolymerElements](https://github.com/PolymerElements).  For use with [TypeScript](http://www.typescriptlang.org/).  Should also be compatible with [Flow](http://flowtype.org/docs/third-party.html).



## Usage

### Installation

```bash
npm install
bower install
```

### [polymer-to-typescript](https://github.com/nalbion/babel-plugin-polymer-to-typescript)

Simply run `gulp` and the [PolymerElements](https://github.com/PolymerElements) under `bower_components` will be converted for [polymer-ts](https://github.com/nippur72/PolymerTS) and then `.d.ts` files will be generated into `typings`.

### [generator-polymerts](https://github.com/bsorrentino/generator-polymerts)

Another approach is to use [generator-polymerts](https://github.com/bsorrentino/generator-polymerts) to create `.d.ts` files from the PolymerElements source directly:

```bash
./generate-tsd.sh
```

