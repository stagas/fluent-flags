export type Key = string
export type Fn<T extends unknown[], R> = (...args: T) => R
export type Fluent<C, T> = C & { [K in keyof T]: Fluent<C, T> }

// https://stackoverflow.com/a/67942573
export type Flags<T extends ReadonlyArray<Key>> = {
  [K in (T extends ReadonlyArray<infer U> ? U : never)]: boolean
}

// Credits: systemfault
export type NarrowHelper<T> =
  | (T extends readonly [] ? readonly [] : never)
  | (T extends string | number | bigint | boolean ? T : never)
  | ({ [K in keyof T]: T[K] extends (...args: any[]) => unknown ? T[K] : NarrowHelper<T[K]> })

/**
 * Decorates a function with fluent flags that are then passed as an object.
 *
 * ```ts
 * const cb = FluentFlags(['foo', 'bar'], flags => (arg: string) => [flags.foo, flags.bar, arg])
 * expect(cb()).toMatchObject([void 0, void 0, void 0])
 * expect(cb('hello')).toMatchObject([void 0, void 0, 'hello'])
 * expect(cb.bar('hello')).toMatchObject([void 0, true, 'hello'])
 * expect(cb.foo.bar('hello')).toMatchObject([true, true, 'hello'])
 * ```
 */
export const FluentFlags = <
  K extends readonly Key[] | readonly [],
  C extends Fn<any, any>,
  T = Partial<Flags<K>>,
>(
  _flagKeys: NarrowHelper<K>,
  cb: (flags: T) => C,
  flags: any = {},
) =>
  new Proxy(cb, {
    get(_, prop, receiver) {
      flags[prop] = true
      return receiver
    },
    apply(_, self, args) {
      const f: T = { ...flags }
      flags = {} // reset for next use
      return cb.call(self, f).apply(self, args)
    },
  }) as Fluent<C, Required<T>>
