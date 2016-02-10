# polymer-elements-typings

Type definitions for [PolymerElements](https://github.com/PolymerElements).  For use with [TypeScript](http://www.typescriptlang.org/).  Should also be compatible with [Flow](http://flowtype.org/docs/third-party.html).

## See Also
- [IntelliJ live templates](https://gist.github.com/nalbion/09435e331c607c045e15)

## Usage

### In Your Web App

To learn more about how to develop Polymer elements in TypeScript refer to [PolymerTS](https://github.com/nippur72/PolymerTS) or Eric Bidelman's article on [Building web components using ES6 classes](https://www.polymer-project.org/1.0/articles/es6.html).

```bash
npm install --save-dev polymer-elements-typings
ln -s node_modules/polymer-elements-typings/typings typings/polymer-elements 
```

Then, at the top of each `.ts` file, add a reference to each definition file you require:

```javascript
/// <reference path="typings/polymer-elements/paper-behaviors/paper-ripple-behavior.d.ts"/>

@component('ts-element')
@behavior(Polymer['PaperRippleBehavior'])
class TsElement extends polymer.Base implements Polymer.PaperRippleBehavior
{   
   // stand-in properties for behavior mixins 
   noink: boolean = false;
   ensureRipple: (optTriggeringEvent?: Event) => void;
   getRipple: () => paper.PaperRipple;
   hasRipple: () => boolean;

   handleClick(e:Event)
   {
      this.greet = "Holà";      
      this.fire("greet-event");
      this.ensureRipple(e);
   }
}
```

### Generation of .d.ts files

This should only be necessary when the Polymer team release a new update to any of the elements.

#### Installation

```bash
npm install       # (only required for `gulp polymer-to-typescript`)
bower install
```

#### [polymer-to-typescript](https://github.com/nalbion/babel-plugin-polymer-to-typescript)

Simply run `gulp` and the [PolymerElements](https://github.com/PolymerElements) under `bower_components` will be converted for [polymer-ts](https://github.com/nippur72/PolymerTS) and then `.d.ts` files will be generated into `typings`.


#### [generator-polymerts](https://github.com/bsorrentino/generator-polymerts)

Another approach is to use [generator-polymerts](https://github.com/bsorrentino/generator-polymerts) to create `.d.ts` files from the PolymerElements source directly:

```bash
./generate-tsd.sh
```

