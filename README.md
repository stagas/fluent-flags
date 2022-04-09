<h1>
fluent-flags <a href="https://npmjs.org/package/fluent-flags"><img src="https://img.shields.io/badge/npm-v2.0.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-20-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/fluent-flags@2.0.0/dist/fluent-flags.min.js"><img src="https://img.shields.io/badge/brotli-152b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Decorates a function with arbitrary fluent boolean flags and passes them as the first parameter.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i fluent-flags </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add fluent-flags </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add fluent-flags</code>
</td></tr></table>
</h4>

## API

<p>  <details id="Flags$1" title="TypeAlias" ><summary><span><a href="#Flags$1">#</a></span>  <code><strong>Flags</strong></code>    </summary>  <a href="src/index.ts#L1">src/index.ts#L1</a>  <ul><p>[K   in   <a href="#T$2">T</a>  ]:  boolean</p>        </ul></details><details id="Fluent$3" title="TypeAlias" ><summary><span><a href="#Fluent$3">#</a></span>  <code><strong>Fluent</strong></code>    </summary>  <a href="src/index.ts#L2">src/index.ts#L2</a>  <ul><p><a href="#C$4">C</a> &amp; [K   in   keyof     <a href="#T$5">T</a>  ]:  <a href="#T$5">T</a>  [<span>K</span>] &amp; <a href="#Fluent$3">Fluent</a>&lt;<a href="#C$4">C</a>, <a href="#T$5">T</a>&gt;</p>        </ul></details><details id="FluentFlags$6" title="Function" ><summary><span><a href="#FluentFlags$6">#</a></span>  <code><strong>FluentFlags</strong></code><em>(cb, flags)</em>     &ndash; Decorates a function with fluent flags that are then passed as an object.</summary>  <a href="src/index.ts#L15">src/index.ts#L15</a>  <ul><p></p>    <p>

```ts
const cb = FluentFlags<'foo' | 'bar'>(flags =>
  (arg?: string) => [flags.foo, flags.bar, arg]
)
expect(cb()).toMatchObject([void 0, void 0, void 0])
expect(cb('hello')).toMatchObject([void 0, void 0, 'hello'])
expect(cb.bar('hello')).toMatchObject([void 0, true, 'hello'])
expect(cb.foo.bar('hello')).toMatchObject([true, true, 'hello'])
```

<details id="cb$16" title="Function" ><summary><span><a href="#cb$16">#</a></span>  <code><strong>cb</strong></code><em>(flags)</em>    </summary>    <ul><p></p>    <p>    <details id="flags$19" title="Parameter" ><summary><span><a href="#flags$19">#</a></span>  <code><strong>flags</strong></code>    </summary>    <ul><p><span>Partial</span>&lt;<a href="#Flags$1">Flags</a>&lt;<a href="#T$8">T</a>&gt;&gt;</p>        </ul></details>  <p><strong>cb</strong><em>(flags)</em>  &nbsp;=&gt;  <ul><a href="#C$15">C</a></ul></p></p>    </ul></details><details id="flags$20" title="Parameter" ><summary><span><a href="#flags$20">#</a></span>  <code><strong>flags</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>{}</code></span>  </summary>    <ul><p><span>Partial</span>&lt;<a href="#Flags$1">Flags</a>&lt;<a href="#T$8">T</a>&gt;&gt;</p>        </ul></details>  <p><strong>FluentFlags</strong>&lt;<span>T</span>, <span>C</span>&gt;<em>(cb, flags)</em>  &nbsp;=&gt;  <ul><a href="#Fluent$3">Fluent</a>&lt;<a href="#C$15">C</a>, <a href="#Flags$1">Flags</a>&lt;<a href="#T$8">T</a>&gt;&gt;</ul></p></p>    </ul></details></p>

## Contributing

[Fork](https://github.com/stagas/fluent-flags/fork) or [edit](https://github.dev/stagas/fluent-flags) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
