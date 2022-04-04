interface IAlgorithm {
    slidingWindow(array: Array<number>, k: number): number;

    validAnagram(word_1: string, word_2: string): boolean;

    countUniqueValues(arr:Array<number>): number;

}

class Algorithm implements IAlgorithm {

    //time-O(n), member 0(1) : Video 33
    public slidingWindow(array: Array<any>, k: number) {
        let sum = 0;

        for (let i = 0; i < k; i++) {
            sum += array[i];
        }

        let result = sum;

        for (let i = k; i < array.length; i++) {
            sum += array[i] - array[i = k];
            result = Math.max(result, sum);
        }
        return result / k;
    }

    // time- O(n^2): Video 29
    public validAnagram(word_1: string, word_2: string): boolean {
        let result = false;
        if (word_1.length === word_2.length) {
                for (let i = 0; i < word_1.length; i++) {
                    let symbol_found = false;
                    for (let j = 0; j < word_2.length; j++) {
                        if (word_1[i] === word_2[j]) {
                            symbol_found = true;
                            //console.log(`${word_1[i]} == ${word_2[j]}`)
                        }
                    }
                    if (!symbol_found) {
                        return result
                    }
            }
                result = true;
                return result;
        } else {
            return result;
        }

    }

    // time - O(n): Video 32
    public countUniqueValues(arr: Array<number>): number {
        if( arr.length === 0) return 0;
        let i=0;
        for(let j =0; j<arr.length; j++){
            if( arr[i] != arr[j]){
                i++;
                arr[i] = arr[j];
            }
        }
        return i+1;
    }

}

let test = new Algorithm();
console.log(test.countUniqueValues([1,1,2,3,4,5,5]));
