mod utils;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;
use crate::utils::set_panic_hook;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
#[derive(Copy, Clone, Debug)]
pub enum GameState {
    OnGoing = 0,
    Winner = 1,
    Draw = 2,
}

#[wasm_bindgen]
pub fn check_cube_for_win() -> GameState {
    if(given_shape.turns > 100){
        alert("To Many Turns!");
    }
    return ShapeState { result: GameState::OnGoing };
}