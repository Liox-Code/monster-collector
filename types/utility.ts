export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

export type NullableExceptId<T extends { id: unknown }> = {
  [K in keyof T]: K extends 'id' ? T[K] : T[K] | null;
};

export type DeepNullableExceptId<T, ProtectedKey extends keyof T | PropertyKey = 'id'> = {
  [K in keyof T]: K extends ProtectedKey
    ? T[K]
    : T[K] extends unknown
      ? T[K] | null
      : T[K] extends object
        ? DeepNullableExceptId<T[K], ProtectedKey> | null
        : T[K] | null;
};
