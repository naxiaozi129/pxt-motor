
/**
 * motor
 */
//% weight=100 color=#0fbc11 icon="f1b9"
namespace custom {
    /**
     * TODO: 控制电机
     * @param n1 在此处描述参数, eg: AnalogPin.P0
     * @param n2 在此处描述参数, eg: AnalogPin.P1
     * @param e 在此处描述参数, eg:0
     */
    //% block="电机A+%n1|A-%n2|速度%e" 
    //%e.min=-255 e.max=255
    export function setSpeedA(n1: AnalogPin, n2: AnalogPin, e: number): void {
        if (e <= 0) {
            pins.analogWritePin(n1, e)
            pins.analogWritePin(n2, 0)
        } else {
            pins.analogWritePin(n2, e)
            pins.analogWritePin(n1, 0)
        }

    }

    /**
     * TODO: 控制电机
     * @param n1 在此处描述参数, eg: AnalogPin.P0
     * @param n2 在此处描述参数, eg: AnalogPin.P1
     * @param e 在此处描述参数, eg:0
     */
    //% block="电机B+%n1|B-%n2|速度%e" 
    //%e.min=-255 e.max=255
    export function setSpeedB(n1: AnalogPin, n2: AnalogPin, e: number): void {
        if (e <= 0) {
            pins.analogWritePin(n1, -e)
            pins.analogWritePin(n2, 0)
        } else {
            pins.analogWritePin(n2, e)
            pins.analogWritePin(n1, 0)
        }

    }
}