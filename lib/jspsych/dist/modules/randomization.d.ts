export declare function repeat(array: any, repetitions: any, unpack?: boolean): any;
export declare function shuffle(array: Array<any>): any[];
export declare function shuffleNoRepeats(arr: Array<any>, equalityTest: (a: any, b: any) => boolean): any[];
export declare function shuffleAlternateGroups(arr_groups: any, random_group_order?: boolean): any[];
export declare function sampleWithoutReplacement(arr: any, size: any): any[];
export declare function sampleWithReplacement(arr: any, size: any, weights?: any): any[];
export declare function factorial(factors: Record<string, any>, repetitions?: number, unpack?: boolean): any;
export declare function randomID(length?: number): string;
/**
 * Generate a random integer from `lower` to `upper`, inclusive of both end points.
 * @param lower The lowest value it is possible to generate
 * @param upper The highest value it is possible to generate
 * @returns A random integer
 */
export declare function randomInt(lower: number, upper: number): number;
/**
 * Generates a random sample from a Bernoulli distribution.
 * @param p The probability of sampling 1.
 * @returns 0, with probability 1-p, or 1, with probability p.
 */
export declare function sampleBernoulli(p: number): 0 | 1;
export declare function sampleNormal(mean: number, standard_deviation: number): number;
export declare function sampleExponential(rate: number): number;
export declare function sampleExGaussian(mean: number, standard_deviation: number, rate: number, positive?: boolean): number;
/**
 * Generate one or more random words.
 *
 * This is a wrapper function for the {@link https://www.npmjs.com/package/random-words `random-words` npm package}.
 *
 * @param opts An object with optional properties `min`, `max`, `exactly`,
 * `join`, `maxLength`, `wordsPerString`, `separator`, and `formatter`.
 *
 * @returns An array of words or a single string, depending on parameter choices.
 */
export declare function randomWords(opts: any): any;
