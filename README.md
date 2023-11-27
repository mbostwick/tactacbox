
## 🚴 Usage
- 🛠️ Build with `wasm-pack build --release --target web`
- 🔬 Test in Headless Browsers with: 
  - `wasm-pack test` or 
  - `wasm-pack test --headless --firefox`
- 🎁 Publish to NPM with `wasm-pack publish`

## 🔋 Included Libraries

* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* [`wee_alloc`](https://github.com/rustwasm/wee_alloc), an allocator optimized
  for small code size.

## 📖 Resources

- [Tutorial](https://rustwasm.github.io/docs/wasm-pack/tutorials/index.html)
- [Other WASM tutorials](https://rustwasm.github.io/docs/wasm-pack/tutorials/npm-browser-packages/index.html)
- [Web Gl Howto](https://youtu.be/y2UsQB3WSvo?si=uZsvWkRcQBQlru3E)
- [Open Gl Spec](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf)