/**
 * Matches a URL to a pattern.
 * For example,
 *     matchUrl('/departments/electronics', '/departments/:id'
 *     => { id: 'electronics' }
 */
export declare const matchUrl: (url: string, pattern: string) => {} | undefined;
