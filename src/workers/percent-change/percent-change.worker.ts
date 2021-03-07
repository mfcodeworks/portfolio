import { percentChange } from '@/utils/percent-change';
import { PercentChangeWorkerData } from '../../types/percent-change';

// Define payload format
interface Payload extends MessageEvent {
    data: PercentChangeWorkerData|PercentChangeWorkerData[];
}

// Set worker context
const ctx: Worker = self as any;

// Handle messages
ctx.addEventListener('message', (payload: Payload) => {
    // Get channel port
    const [port] = payload.ports;

    // Get payload data
    const { data }: Payload = payload;

    // Handle as array
    if (Array.isArray(data)) {
        // Get results
        const results = data.map(
            ({ oldData, newData }) => percentChange(oldData, newData)
        );

        // Return on port
        port.postMessage({
            result: results
        });
        return;
    }

    // Handle as single point
    const { oldData, newData } = data;

    // Get result
    const result = percentChange(oldData, newData);

    // Return on port
    port.postMessage({ result });
});
