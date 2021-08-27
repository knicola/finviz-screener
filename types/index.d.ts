import * as exports from './finviz';

declare module finviz {
    export function finviz(options: Options): FinVizScreener;
    export class FinVizScreener extends exports.FinVizScreener {}
    export type Options = exports.Options;
}

declare function finviz(options: finviz.Options): finviz.FinVizScreener;

export = finviz;
