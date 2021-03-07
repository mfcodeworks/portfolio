/**
 * Test 2 objects for property equality
 * @param itemA Object 1
 * @param itemB Object 2
 */
export const objectsAreEqual = (itemA?: Record<string, any>, itemB?: Record<string, any>) => {
    // Build comparison objects
    const comparisonA = JSON.stringify(itemA);
    const comparisonB = JSON.stringify(itemB);

    // Return comparison
    return comparisonA === comparisonB;
};
