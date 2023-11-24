
## 🚴 Usage
- 🛠️ Build with `wasm-pack build --release --target web`
- 🔬 Test in Headless Browsers with `wasm-pack test` or `wasm-pack test --headless --firefox`
- 🎁 Publish to NPM with `wasm-pack publish`

## 🔋 Batteries Included

* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* [`wee_alloc`](https://github.com/rustwasm/wee_alloc), an allocator optimized
  for small code size.

## 📖 Origins

- [Read the template tutorial for the build out!][template-docs]
- [Other wasm-pack tutorials online][tutorials].

[tutorials]: https://rustwasm.github.io/docs/wasm-pack/tutorials/index.html
[template-docs]: https://rustwasm.github.io/docs/wasm-pack/tutorials/npm-browser-packages/index.html