class CollectionEnumerator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }
    next() {
        this.index++;
        return this;
    }
    get Current() {
        return {
            value: this.array[this.index],
            done: this.index === this.array.length - 1,
        };
    }
}
export class Collection {
    getEnumerator() {
        return new CollectionEnumerator(this.toArray());
    }
    toArray() {
        const arr = [];
        this.__iterate((item, index) => {
            arr[index] = item;
        });
        return arr;
    }
}
