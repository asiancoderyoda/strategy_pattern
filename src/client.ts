import { ISortStrategy } from "./interface";
import { BubbleSort, SelectionSort, SortStrategy } from "./strategy";

export class SlowSort implements ISortStrategy {
    strategy: SortStrategy;
    dataset: number[]
    constructor(data: number[]){
        this.dataset = data;
        this.strategy = new BubbleSort()
    }
    sort() {
        console.log("Slow sort started")
        const data = this.strategy.sort(this.dataset);
        return `Executed Slow Sort ${data}`
    }
}

export class FastSort implements ISortStrategy {
    strategy: SortStrategy;
    dataset: number[];
    constructor(data: number[]) {
        this.dataset = data;
        this.strategy = new SelectionSort()
    }

    sort() {
        console.log("Fast sort started")
        const data = this.strategy.sort(this.dataset)
        return `Executed Fast Sort ${data}`
    }
}