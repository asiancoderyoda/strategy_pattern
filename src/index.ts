import { FastSort, SlowSort } from "./client";

const dataset: number[] = [];

for (let i = 0; i < 100; i++) {
    dataset.push(500*Math.random());
}

const slowInstance = new SlowSort(dataset)
const fastInstance = new FastSort(dataset)

console.log(slowInstance.sort())
console.log(fastInstance.sort())