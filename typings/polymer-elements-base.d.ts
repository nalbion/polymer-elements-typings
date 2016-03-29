
declare interface Promise {
    then<U>(onFulfill?: (value: any) => U | Promise, onReject?: (error: any) => U | Promise): Promise;
    catch<U>(onReject: (error: any) => U | Promise): Promise;
}

declare interface PolymerEvent<D> extends Event {
    detail: D;
}

declare interface PolymerSelectEvent extends PolymerEvent<{item: HTMLElement}> {
    detail: {
        item: HTMLElement;
    };
}

