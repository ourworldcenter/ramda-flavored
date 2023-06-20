import { flip, gt, gte, lt, lte } from 'ramda'

/**
 * Returns `true` if the second argument is greater than the first; `false`
 * otherwise.
 *
 * See also {@link isLt}
 *
 * @example
 * ```typescript
 * R.isGt(1, 2); //=> true
 * R.isGt(2, 2); //=> false
 * R.isGt(3, 1); //=> false
 * R.isGt('z', 'a'); //=> false
 * R.isGt('a', 'z'); //=> true
 * ```
 */
export const isGt = flip(gt)

/**
 * Returns `true` if the second argument is less than the first; `false`
 * otherwise.
 *
 * See also {@link isGt}
 *
 * @example
 * ```typescript
 * R.isLt(1, 2); //=> false
 * R.isLt(2, 2); //=> false
 * R.isLt(3, 2); //=> true
 * R.isLt('z', 'a'); //=> true
 * R.isLt('a', 'z'); //=> false
 * ```
 */
export const isLt = flip(lt)

/**
 * Returns `true` if the second argument is greater than or equal to the first;
 * `false` otherwise.
 *
 * See also {@link isLte}
 *
 * @example
 * ```typescript
 * R.isGte(1, 2); //=> true
 * R.isGte(2, 2); //=> true
 * R.isGte(3, 2); //=> false
 * R.isGte('z', 'a'); //=> false
 * R.isGte('a', 'z'); //=> true
 * ```
 */
export const isGte = flip(gte)

/**
 * Returns `true` if the second argument is less than or equal to the first;
 * `false` otherwise.
 *
 * See also {@link isGte}
 *
 * @example
 * ```typescript
 * R.isLte(1, 2); //=> false
 * R.isLte(2, 2); //=> true
 * R.isLte(3, 1); //=> true
 * R.isLte('z', 'a'); //=> true
 * R.isLte('a', 'z'); //=> false
 * ```
 */
export const isLte = flip(lte)
