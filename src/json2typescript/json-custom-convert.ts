/**
 * Interface for custom conversion between JSON objects and TypeScript objects.
 *
 * You have to implement two methods:
 * - serialize() to map a TypeScript object to a JSON object
 * - deserialize() to map a JSON object to a TypeScript object
 *
 * @author Andreas Aeschlimann, DHlab, University of Basel, Switzerland
 * @see https://www.npmjs.com/package/json2typescript full documentation on NPM$
 */
export interface JsonCustomConvert<T> {

    /**
     * Converts an incoming TypeScript object to a plain JSON object.
     * Please note that the argument or resulting object can be primitive.
     *
     * @param data TypeScript object
     * @param parent TypeScript parent object
     *
     * @return {any} JSON object
     */
    serialize(data: T, parent?: any): any;

    /**
     * Converts an incoming JSON object object to a TypeScript object.
     * Please note that the argument or resulting object can be primitive.
     *
     * @param data JSON object
     * @param data JSON object parent
     *
     * @return {any} TypeScript object
     */
    deserialize(data: any, parent?: any): T;

}
