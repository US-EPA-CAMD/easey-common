export declare abstract class BaseMap<E, T> {
    abstract one(entity: E): Promise<T>;
    many(values: E[]): Promise<T[]>;
}
