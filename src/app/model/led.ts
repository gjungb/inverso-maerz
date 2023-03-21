/**
 * Represents a single Led as found on a Blinkt! Led strip.
 */
export interface Led {
    /**
     * The 0-based index in a list of Leds
     */
    index: number;
    /**
     * The CSS color string
     * @see {@link ...}
     */
    color: string;
}

/**
 * A sorted list of Leds
 */
export type Leds = Led[];
