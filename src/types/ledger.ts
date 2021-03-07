/**
 * Ledger record
 *
 * Example:
 * ```
 * {
 *   spending: 38.90,
 *   symbol: 'aud',
 *   timestamp: '2021-02-26T11:39:00Z'
 * }
 * ```
 */
export type LedgerRecord = {
    spending?: number;
    withdrawl?: number;
    symbol: string;
    timestamp: Date|string;
}
