// Physics
// ----------------
export const SCALE = 32	// pixels per meter, used to scale physics simulation up to rendering
export const SPEED = 2 // User snowboard control speed

export const PLAYER_GROUP_INDEX = -1
export const OBSTACLE_GROUP_INDEX = 1
export const HZ_MS = 1 / 60 * 1000

export const HILL_TAG = 3
export const HEAD_SENSOR = 5
export const BOARD_SENSOR = 6

// Sprite
// ----------------
export const PLAYER_HEIGHT = 38
export const PLAYER_WIDTH = 26
export const RAMP_WIDTH = 63
export const RAMP_HEIGHT = 42


// Colors
// ----------------
export const OFF_WHITE = 0xECEFED
export const TREE_DARK = 0x395123
export const TREE_LIGHT = 0x6e8c52
export const INTERACTIVE_BUTTON = '#466E85'
export const HEADINGS = '#540F0F'
export const TEXT = '#000000'
export const GREY = 0x727272
export const P2 = 0x2E6BE4
export const P1 = 0xE8131D

// Text Style
// ----------------
export const BUTTON_TEXTSTYLE = { font: '24px Rockwell', fill: 'white' }


// Game Canvas
// ----------------
export const GAME_WIDTH = window.innerWidth
export const GAME_HEIGHT = window.innerHeight
export const GAME_HCENTER = GAME_WIDTH / 2
export const GAME_VCENTER = GAME_HEIGHT / 2

export const LOCATION_BAR_START = GAME_WIDTH - 250

// POINTS
// ----------------
export const FAILED_LANDING_POINT_DEDUCTION = 30
export const HIT_OBSTACLE_POINT_DEDUCTION = 10
export const COMPLETED_FLIP_POINTS = 100
