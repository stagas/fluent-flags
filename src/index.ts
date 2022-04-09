export type Flags<T extends string> = { [K in T]: boolean }
export type Fluent<C, T> = C & { [K in keyof T]: T[K] & Fluent<C, T> }

/**
 * Decorates a function with fluent flags that are then passed as an object.
 *
 * ```ts
 * const cb = FluentFlags<'foo' | 'bar'>(flags => (arg?: string) => [flags.foo, flags.bar, arg])
 * expect(cb()).toMatchObject([void 0, void 0, void 0])
 * expect(cb('hello')).toMatchObject([void 0, void 0, 'hello'])
 * expect(cb.bar('hello')).toMatchObject([void 0, true, 'hello'])
 * expect(cb.foo.bar('hello')).toMatchObject([true, true, 'hello'])
 * ```
 */
export const FluentFlags = <
  T extends string,
  C extends (...args: any[]) => any = (...args: any[]) => any,
>(
  cb: (flags: Partial<Flags<T>>) => C,
  flags: Partial<Flags<T>> = {},
) =>
  new Proxy(cb, {
    get(_, prop: T, receiver) {
      flags[prop] = true
      return receiver
    },
    apply(_, self, args) {
      const f: Partial<Flags<T>> = { ...flags }
      flags = {} // reset for next use
      return cb.call(self, f).apply(self, args)
    },
  }) as Fluent<C, Flags<T>>
