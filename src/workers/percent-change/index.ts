import Worker from 'worker-loader!./percent-change.worker';
import { PercentChangeWorkerData, PercentChangeWorkerResult } from '../../types/percent-change';

// Instantiate worker
const worker = new Worker();

/**
 * Calculate percent change between 2 values
 * @param oldData Previous data
 * @param newData Newer data
 */
export default (item: PercentChangeWorkerData|PercentChangeWorkerData[]) => {
    // Setup channel
    const channel = new MessageChannel();

    // Send data to worker
    worker.postMessage(item, [channel.port1]);

    // Return promise wrapper for result
    return new Promise<
        |PercentChangeWorkerResult
        |PercentChangeWorkerResult[]
    >((resolve) => {
        channel.port2.onmessage = (event: MessageEvent) => {
            resolve(event.data.result);
        };
    });
};
