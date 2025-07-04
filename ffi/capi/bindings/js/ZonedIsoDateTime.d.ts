// generated by diplomat-tool
import type { CalendarParseError } from "./CalendarParseError"
import type { IanaParser } from "./IanaParser"
import type { IsoDate } from "./IsoDate"
import type { Time } from "./Time"
import type { TimeZoneInfo } from "./TimeZoneInfo"
import type { UtcOffset } from "./UtcOffset"
import type { VariantOffsetsCalculator } from "./VariantOffsetsCalculator"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";


/** 
 * An ICU4X ZonedDateTime object capable of containing a ISO-8601 date, time, and zone.
 *
 * See the [Rust documentation for `ZonedDateTime`](https://docs.rs/icu/latest/icu/time/struct.ZonedDateTime.html) for more information.
 */


export class ZonedIsoDateTime {
    
    get date() : IsoDate;
    
    get time() : Time;
    
    get zone() : TimeZoneInfo;
    

    /** 
     * Creates a new [`ZonedIsoDateTime`] from an IXDTF string.
     *
     * See the [Rust documentation for `try_full_from_str`](https://docs.rs/icu/latest/icu/time/struct.ZonedDateTime.html#method.try_full_from_str) for more information.
     */
    static fullFromString(v: string, ianaParser: IanaParser, offsetCalculator: VariantOffsetsCalculator): ZonedIsoDateTime;

    /** 
     * Creates a new [`ZonedIsoDateTime`] from milliseconds since epoch (timestamp) and a UTC offset.
     *
     * Note: [`ZonedIsoDateTime`]s created with this constructor can only be formatted using localized offset zone styles.
     *
     * See the [Rust documentation for `from_epoch_milliseconds_and_utc_offset`](https://docs.rs/icu/latest/icu/time/struct.ZonedDateTime.html#method.from_epoch_milliseconds_and_utc_offset) for more information.
     */
    static fromEpochMillisecondsAndUtcOffset(epochMilliseconds: bigint, utcOffset: UtcOffset): ZonedIsoDateTime;
}