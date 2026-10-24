export type Variant = 'primary' | 'secondary' | 'tertiary';
export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'auto';

export type Option<T extends string = string> = { value: T; label: string };
