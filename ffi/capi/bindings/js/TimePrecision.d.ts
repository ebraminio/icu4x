// generated by diplomat-tool
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";


/** 
 * See the [Rust documentation for `TimePrecision`](https://docs.rs/icu/latest/icu/datetime/options/enum.TimePrecision.html) for more information.
 *
 * See the [Rust documentation for `SubsecondDigits`](https://docs.rs/icu/latest/icu/datetime/options/enum.SubsecondDigits.html) for more information.
 */


export class TimePrecision {
    

    static fromValue(value : TimePrecision | string) : TimePrecision; 

    get value() : string;

    get ffiValue() : number;

    static Hour : TimePrecision;
    static Minute : TimePrecision;
    static MinuteOptional : TimePrecision;
    static Second : TimePrecision;
    static Subsecond1 : TimePrecision;
    static Subsecond2 : TimePrecision;
    static Subsecond3 : TimePrecision;
    static Subsecond4 : TimePrecision;
    static Subsecond5 : TimePrecision;
    static Subsecond6 : TimePrecision;
    static Subsecond7 : TimePrecision;
    static Subsecond8 : TimePrecision;
    static Subsecond9 : TimePrecision;

    /** 
     * See the [Rust documentation for `try_from_int`](https://docs.rs/icu/latest/icu/datetime/options/enum.SubsecondDigits.html#method.try_from_int) for more information.
     */
    static fromSubsecondDigits(digits: number): TimePrecision | null;

    constructor(value: TimePrecision | string );
}