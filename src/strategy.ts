export abstract class SortStrategy {
    constructor() {}
    sort(dataset: number[]): number[] {
        return []
    }
}

export class BubbleSort extends SortStrategy {
    constructor() {
        super();
    }

    sort (dataset: number[]) {
        let len = dataset.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (dataset[j] > dataset[j + 1]) {
                    let tmp = dataset[j];
                    dataset[j] = dataset[j + 1];
                    dataset[j + 1] = tmp;
                }
            }
        }
        return dataset;
    }
}

export class SelectionSort extends SortStrategy {
    constructor() {
        super();
    }

    sort (dataset: number[]) {
        let len = dataset.length;
        
        for(let i = 0; i < len; i++) {
            // Finding the smallest number in the subarray
            let min = i;
            for(let j = i+1; j < len; j++){
                if(dataset[j] < dataset[min]) {
                    min=j; 
                }
            }
            if (min != i) {
                // Swapping the elements
                let tmp = dataset[i]; 
                dataset[i] = dataset[min];
                dataset[min] = tmp;      
            }
        }

        return dataset
    }
}