export const objectsAreEqual = (itemA?: Record<string, any>, itemB?: Record<string, any>) => {
    // Build comparison objects
    const comparisonA = JSON.stringify(itemA);
    const comparisonB = JSON.stringify(itemB);

    // Return comparison
    return comparisonA === comparisonB;
};
