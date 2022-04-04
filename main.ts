interface IAlgorithm {
    slidingWindow(array: Array<number>, k: number): number;
}

class Algorithm implements IAlgorithm {

    //time-O(n), member 0(1)
    slidingWindow(array: Array<any>, k: number) {
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


}
