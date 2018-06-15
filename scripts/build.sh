cargo +nightly build --release --target wasm32-unknown-unknown \
&& wasm-bindgen target/wasm32-unknown-unknown/release/nzsc2p_gooey.wasm --out-dir ./web-src/wasm/ \
&& npx webpack \
&& cp -a ./public/. ./build/
