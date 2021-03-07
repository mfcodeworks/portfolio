/**
 * Single asset record for date
 *
 * Example:
 * ```ts
 * {
 *   symbol: 'ltc',
 *   name: 'Litecoin',
 *   price: 206.50,
 *   priceSymbol: 'aud',
 *   holding: 17.80
 *   timestamp: '2021-02-27T10:00:00Z'
 * }
 * ```
 */
export type AssetRecord = {
    symbol?: string;
    name?: string;
    price: number;
    priceSymbol: number;
    holding: number;
    timestamp: Date|string;
}

/**
 * Asset list for date
 *
 * Example:
 * ```ts
 * {
 *   '2021-02-27': [
 *     {
 *       symbol: 'ltc',
 *       name: 'Litecoin',
 *       price: 206.50,
 *       priceSymbol: 'aud',
 *       holding: 17.80,
 *       timestamp: '2021-02-27T10:00:00Z'
 *     }
 *   ]
 * }
 * ```
 */
export type AssetList = Record<string, AssetRecord[]>;
