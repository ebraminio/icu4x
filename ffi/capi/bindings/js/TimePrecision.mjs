// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** 
 * See the [Rust documentation for `TimePrecision`](https://docs.rs/icu/latest/icu/datetime/options/enum.TimePrecision.html) for more information.
 *
 * See the [Rust documentation for `SubsecondDigits`](https://docs.rs/icu/latest/icu/datetime/options/enum.SubsecondDigits.html) for more information.
 */


export class TimePrecision {
    
    #value = undefined;

    static #values = new Map([
        ["Hour", 0],
        ["Minute", 1],
        ["MinuteOptional", 2],
        ["Second", 3],
        ["Subsecond1", 4],
        ["Subsecond2", 5],
        ["Subsecond3", 6],
        ["Subsecond4", 7],
        ["Subsecond5", 8],
        ["Subsecond6", 9],
        ["Subsecond7", 10],
        ["Subsecond8", 11],
        ["Subsecond9", 12]
    ]);

    static getAllEntries() {
        return TimePrecision.#values.entries();
    }
    
    #internalConstructor(value) {
        if (arguments.length > 1 && arguments[0] === diplomatRuntime.internalConstructor) {
            // We pass in two internalConstructor arguments to create *new*
            // instances of this type, otherwise the enums are treated as singletons.
            if (arguments[1] === diplomatRuntime.internalConstructor ) {
                this.#value = arguments[2];
                return this;
            }
            return TimePrecision.#objectValues[arguments[1]];
        }

        if (value instanceof TimePrecision) {
            return value;
        }

        let intVal = TimePrecision.#values.get(value);

        // Nullish check, checks for null or undefined
        if (intVal != null) {
            return TimePrecision.#objectValues[intVal];
        }

        throw TypeError(value + " is not a TimePrecision and does not correspond to any of its enumerator values.");
    }

    static fromValue(value) {
        return new TimePrecision(value);
    }

    get value() {
        return [...TimePrecision.#values.keys()][this.#value];
    }

    get ffiValue() {
        return this.#value;
    }
    static #objectValues = [
        new TimePrecision(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 0),
        new TimePrecision(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 1),
        new TimePrecision(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 2),
        new TimePrecision(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 3),
        new TimePrecision(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 4),
        new TimePrecision(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 5),
        new TimePrecision(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 6),
        new TimePrecision(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 7),
        new TimePrecision(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 8),
        new TimePrecision(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 9),
        new TimePrecision(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 10),
        new TimePrecision(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 11),
        new TimePrecision(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 12),
    ];

    static Hour = TimePrecision.#objectValues[0];
    static Minute = TimePrecision.#objectValues[1];
    static MinuteOptional = TimePrecision.#objectValues[2];
    static Second = TimePrecision.#objectValues[3];
    static Subsecond1 = TimePrecision.#objectValues[4];
    static Subsecond2 = TimePrecision.#objectValues[5];
    static Subsecond3 = TimePrecision.#objectValues[6];
    static Subsecond4 = TimePrecision.#objectValues[7];
    static Subsecond5 = TimePrecision.#objectValues[8];
    static Subsecond6 = TimePrecision.#objectValues[9];
    static Subsecond7 = TimePrecision.#objectValues[10];
    static Subsecond8 = TimePrecision.#objectValues[11];
    static Subsecond9 = TimePrecision.#objectValues[12];

    /** 
     * See the [Rust documentation for `try_from_int`](https://docs.rs/icu/latest/icu/datetime/options/enum.SubsecondDigits.html#method.try_from_int) for more information.
     */
    static fromSubsecondDigits(digits) {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 5, 4, true);
        
        const result = wasm.icu4x_TimePrecision_from_subsecond_digits_mv1(diplomatReceive.buffer, digits);
    
        try {
            if (!diplomatReceive.resultFlag) {
                return null;
            }
            return new TimePrecision(diplomatRuntime.internalConstructor, diplomatRuntime.enumDiscriminant(wasm, diplomatReceive.buffer));
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    constructor(value) {
        return this.#internalConstructor(...arguments)
    }
}