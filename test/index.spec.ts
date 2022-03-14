import { FluentFlags } from '../src'

describe('cb = FluentFlags<type>()(cb)', () => {
  it('decorates function', () => {
    const cb = FluentFlags<'foo' | 'bar'>()(flags => () => [flags.foo, flags.bar])
    expect(cb()).toMatchObject([void 0, void 0])
    expect(cb.foo()).toMatchObject([true, void 0])
    expect(cb.foo.bar()).toMatchObject([true, true])
    expect(cb.bar()).toMatchObject([void 0, true])
  })

  it('passes arguments', () => {
    const cb = FluentFlags<'foo' | 'bar'>()(flags => (arg?: string) => [flags.foo, flags.bar, arg])
    expect(cb()).toMatchObject([void 0, void 0, void 0])
    expect(cb('hello')).toMatchObject([void 0, void 0, 'hello'])
    expect(cb.bar('hello')).toMatchObject([void 0, true, 'hello'])
    expect(cb.foo.bar('hello')).toMatchObject([true, true, 'hello'])
  })
})
