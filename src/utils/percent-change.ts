/**
 * Calculate percent change between 2 numbers
 * @param oldData Previous data point
 * @param newData New data point
 */
export const percentChange = (oldData: number, newData: number) => {
    // Check if oldData is 0
    if (
        Number.isNaN(oldData)
        || Number.isNaN(newData)
        || oldData === 0
    ) {
        return NaN;
    }

    // Calculate difference
    const diff = newData - oldData;
    const change = diff / oldData;
    return change * 100;
};
