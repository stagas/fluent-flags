import { inspectWithPreamble } from '@n1kk/intspector'
import { FluentFlags } from '../src'

const typeTest = (body: string) => {
  try {
    inspectWithPreamble(`
      import { FluentFlags } from '../src'
      ${body}
    `)({})
    return true
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error[0].messageText
  }
}

describe('cb = FluentFlags([flagA, flagB, ...], cb)', () => {
  it('decorates function', () => {
    const cb = FluentFlags(['foo', 'bar'], flags => () => [flags.foo, flags.bar])
    expect(cb()).toMatchObject([void 0, void 0])
    expect(cb.foo()).toMatchObject([true, void 0])
    expect(cb.foo.bar()).toMatchObject([true, true])
    expect(cb.bar()).toMatchObject([void 0, true])
    expect(typeTest(`
      const cb = FluentFlags(['foo', 'bar'], flags => () => [flags.foo, flags.bar])
      cb.wrong()
    `)).toContain('Property \'wrong\' does not exist')
    // cb.wrong('hello')
  })

  it('passes arguments', () => {
    const cb = FluentFlags(['foo', 'bar'], flags => (arg: string) => [flags.foo, flags.bar, arg])
    expect(cb('hello')).toMatchObject([void 0, void 0, 'hello'])
    expect(cb.bar('hello')).toMatchObject([void 0, true, 'hello'])
    expect(cb.foo.bar('hello')).toMatchObject([true, true, 'hello'])

    expect(typeTest(`
      const cb = FluentFlags(['foo', 'bar'], flags => (arg: string) => [flags.foo, flags.bar, arg])
      cb(123)
    `)).toContain('Argument of type \'number\' is not assignable to parameter of type \'string\'.')
    // cb(123)

    expect(typeTest(`
      const cb = FluentFlags(['foo', 'bar'], flags => (arg: string) => [flags.foo, flags.bar, arg])
      cb.wrong('hello')
    `)).toContain('Property \'wrong\' does not exist')
    // cb.wrong('hello')
  })
})
