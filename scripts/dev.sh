cargo +nightly build --release --target wasm32-unknown-unknown \
&& wasm-bindgen target/wasm32-unknown-unknown/release/nzsc2p_gooey.wasm --out-dir ./web-src/wasm/ \
&& cp -a ./public/. ./build/ \
&& npx webpack --config ./webpack.dev.config.js & serve build -l 3000
