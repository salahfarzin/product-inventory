export interface Transformer<D,E> {
    fromDto(e: E): D;

    toDto(d: D): E;
}
