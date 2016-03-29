/// <reference path="../../polymer-ts.d.ts" />
/**
 * The `<platinum-bluetooth-device>` element allows you to [discover nearby
 * bluetooth devices][1] thanks to the young [Web Bluetooth API][2]. It is
 * currently only partially implemented in Chrome OS 45 behind the
 * experimental flag `chrome://flags/#enable-web-bluetooth`.
 *
 * `<platinum-bluetooth-device>` is used as a parent element for
 * `<platinum-bluetooth-characteristic>` child elements.
 *
 * For instance, here's how to request a nearby bluetooth device advertising
 * Battery service :
 *
 * ```html
 * <platinum-bluetooth-device
 *     services-filter='["battery_service"]'>
 * </platinum-bluetooth-device>
 * ```
 * ```js
 * button.addEventListener('click', function() {
 *   document.querySelector('platinum-bluetooth-device').request()
 *   .then(function(device) { console.log(device.name); })
 *   .catch(function(error) { console.error(error); });
 * });
 * ```
 *
 * [1]: https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web
 * [2]: https://github.com/WebBluetoothCG/web-bluetooth
 *
 * @hero hero.svg
 * @demo
 */
export declare class PlatinumBluetoothDevice extends polymer.Base {
    /**
     * Indicates whether the Web Bluetooth API is supported by
     * this browser.
     */
    supported: boolean;
    /**
     * Required Bluetooth GATT services filter. You may provide either the
     * full Bluetooth UUID as a string or a short 16- or 32-bit form as
     * integers like 0x180d.
     */
    servicesFilter: any[];
    created(): void;
    /**
     * Reset device to pick a new device.
     */
    reset(): void;
    /**
     * Request a nearby bluetooth device and returns a Promise that will
     * resolve when user picked one Bluetooth device.
     *
     * It must be called on user gesture.
     *
     * @return {Promise<BluetoothDevice>}
     */
    request(): any;
}
