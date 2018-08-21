export interface JsonCustomConvert<T> {
    serialize(data: T, parent?: any): any;
    deserialize(data: any, parent?: any): T;
}
