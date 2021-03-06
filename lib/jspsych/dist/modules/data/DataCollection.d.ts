import { DataColumn } from "./DataColumn";
export declare class DataCollection {
    private trials;
    constructor(data?: any[]);
    push(new_data: any): this;
    join(other_data_collection: DataCollection): this;
    top(): DataCollection;
    /**
     * Queries the first n elements in a collection of trials.
     *
     * @param n A positive integer of elements to return. A value of
     *          n that is less than 1 will throw an error.
     *
     * @return First n objects of a collection of trials. If fewer than
     *         n trials are available, the trials.length elements will
     *         be returned.
     *
     */
    first(n?: number): DataCollection;
    /**
     * Queries the last n elements in a collection of trials.
     *
     * @param n A positive integer of elements to return. A value of
     *          n that is less than 1 will throw an error.
     *
     * @return Last n objects of a collection of trials. If fewer than
     *         n trials are available, the trials.length elements will
     *         be returned.
     *
     */
    last(n?: number): DataCollection;
    values(): any[];
    count(): number;
    readOnly(): DataCollection;
    addToAll(properties: any): this;
    addToLast(properties: any): this;
    filter(filters: any): DataCollection;
    filterCustom(fn: any): DataCollection;
    select(column: any): DataColumn;
    ignore(columns: any): DataCollection;
    uniqueNames(): any[];
    csv(): string;
    json(pretty?: boolean): string;
    localSave(format: any, filename: any): void;
}
