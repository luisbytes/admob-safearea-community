import { Device } from '@capacitor/device';
import capacitorPackage from '@capacitor/core/package.json';

window.customElements.define(
  'app-header',
  class extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `
    <style>
      :host {
        position: relative;
        display: block;
        padding: 12px;
        text-align: center;
        background-color: #2e7dcd;
        color: #fff;
      }
      h1 {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        font-size: 1.25em;
        font-weight: 600;
      }
      p {
        margin: 4px 0 0;
        color: #dbeaff;
        font-size: 0.9em;
      }
    </style>
    <h1 id="platform-info">Loading platform info...</h1>
    <p id="webview-info">Loading device information...</p>
    `;
    }

    async connectedCallback() {
      const platformInfoElement = this.shadowRoot.querySelector('#platform-info');
      const webviewInfoElement = this.shadowRoot.querySelector('#webview-info');

      try {
        const deviceInfo = await Device.getInfo();

        const platformInfo = `${this.getPlatformName(deviceInfo.platform)} ${deviceInfo.osVersion}`;
        const webviewInfo = `WebView ${deviceInfo.webViewVersion} · Capacitor ${capacitorPackage.version}`;

        platformInfoElement.textContent = platformInfo;
        webviewInfoElement.textContent = webviewInfo;
      } catch (error) {
        platformInfoElement.textContent = 'Platform information unavailable';
        webviewInfoElement.textContent = 'Device information unavailable';

        console.error('Could not read device information', error);
      }
    }

    getPlatformName(platform) {
      const names = {
        ios: 'iOS',
        android: 'Android'
      };

      return names[platform] || platform;
    }
  },
);
