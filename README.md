<h1>
fluent-flags <a href="https://npmjs.org/package/fluent-flags"><img src="https://img.shields.io/badge/npm-v3.0.1-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-26-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/fluent-flags@3.0.1/dist/fluent-flags.min.js"><img src="https://img.shields.io/badge/brotli-151b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
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

<p>  <details id="Flags$11" title="TypeAlias" ><summary><span><a href="#Flags$11">#</a></span>  <code><strong>Flags</strong></code>    </summary>  <a href="src/index.ts#L6">src/index.ts#L6</a>  <ul><p>[K   in   <a href="#T$12">T</a> extends <span>ReadonlyArray</span>&lt;inferred&gt; ? <span>U</span> : never  ]:  boolean</p>        </ul></details><details id="Fluent$8" title="TypeAlias" ><summary><span><a href="#Fluent$8">#</a></span>  <code><strong>Fluent</strong></code>    </summary>  <a href="src/index.ts#L3">src/index.ts#L3</a>  <ul><p><a href="#C$9">C</a> &amp; [K   in   keyof     <a href="#T$10">T</a>  ]:  <a href="#Fluent$8">Fluent</a>&lt;<a href="#C$9">C</a>, <a href="#T$10">T</a>&gt;</p>        </ul></details><details id="Fn$2" title="TypeAlias" ><summary><span><a href="#Fn$2">#</a></span>  <code><strong>Fn</strong></code>    </summary>  <a href="src/index.ts#L2">src/index.ts#L2</a>  <ul><p><details id="__type$3" title="Function" ><summary><span><a href="#__type$3">#</a></span>  <em>(args)</em>    </summary>    <ul>    <p>    <details id="args$5" title="Parameter" ><summary><span><a href="#args$5">#</a></span>  <code><strong>args</strong></code>    </summary>    <ul><p><a href="#T$6">T</a></p>        </ul></details>  <p><strong></strong><em>(args)</em>  &nbsp;=&gt;  <ul><a href="#R$7">R</a></ul></p></p>    </ul></details></p>        </ul></details><details id="Key$1" title="TypeAlias" ><summary><span><a href="#Key$1">#</a></span>  <code><strong>Key</strong></code>    </summary>  <a href="src/index.ts#L1">src/index.ts#L1</a>  <ul><p>string</p>        </ul></details><details id="FluentFlags$13" title="Function" ><summary><span><a href="#FluentFlags$13">#</a></span>  <code><strong>FluentFlags</strong></code><em>(_flagKeys, cb, flags)</em>     &ndash; Decorates a function with fluent flags that are then passed as an object.</summary>  <a href="src/index.ts#L21">src/index.ts#L21</a>  <ul>    <p>  <p>

```ts
const cb = FluentFlags(
  ['foo', 'bar'] as const,
  flags => (arg: string) => [flags.foo, flags.bar, arg]
)
expect(cb()).toMatchObject([void 0, void 0, void 0])
expect(cb('hello')).toMatchObject([void 0, void 0, 'hello'])
expect(cb.bar('hello')).toMatchObject([void 0, true, 'hello'])
expect(cb.foo.bar('hello')).toMatchObject([true, true, 'hello'])
```

</p>
  <details id="_flagKeys$18" title="Parameter" ><summary><span><a href="#_flagKeys$18">#</a></span>  <code><strong>_flagKeys</strong></code>    </summary>    <ul><p><a href="#K$15">K</a></p>        </ul></details><details id="cb$19" title="Function" ><summary><span><a href="#cb$19">#</a></span>  <code><strong>cb</strong></code><em>(flags)</em>    </summary>    <ul>    <p>    <details id="flags$22" title="Parameter" ><summary><span><a href="#flags$22">#</a></span>  <code><strong>flags</strong></code>    </summary>    <ul><p><a href="#T$17">T</a></p>        </ul></details>  <p><strong>cb</strong><em>(flags)</em>  &nbsp;=&gt;  <ul><a href="#C$16">C</a></ul></p></p>    </ul></details><details id="flags$23" title="Parameter" ><summary><span><a href="#flags$23">#</a></span>  <code><strong>flags</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>{}</code></span>  </summary>    <ul><p>any</p>        </ul></details>  <p><strong>FluentFlags</strong>&lt;<span>K</span>, <span>C</span><span>&nbsp;extends&nbsp;</span>     <a href="#Fn$2">Fn</a>&lt;any, any&gt;, <span>T</span>&gt;<em>(_flagKeys, cb, flags)</em>  &nbsp;=&gt;  <ul><a href="#Fluent$8">Fluent</a>&lt;<a href="#C$16">C</a>, <span>Required</span>&lt;<a href="#T$17">T</a>&gt;&gt;</ul></p></p>    </ul></details></p>

## Contributing

[Fork](https://github.com/stagas/fluent-flags/fork) or [edit](https://github.dev/stagas/fluent-flags) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
