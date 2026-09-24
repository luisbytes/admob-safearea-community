# AdMob Safe Area Reproduction

Minimal reproduction project for an Android safe-area issue with `@capacitor-community/admob` when using Capacitor 8.5.2+ and different Android System WebView versions.

## Observed behavior

| Android | WebView | Result |
|---|---|---|
| Android <= 14 | WebView < 140 | Works |
| Android <= 14 | WebView >= 140 | Banner behind navigation bar |
| Android >= 15 | WebView < 140 | Double safe-area padding |
| Android >= 15 | WebView >= 140 | Works |

The project uses an adaptive banner positioned at the bottom center.

## Screenshots

| Android 14 + WebView 113 | Android 14 + WebView 153 |
|---|---|
| ![Android 14 with WebView 113](screenshots/ANDROID-14-WEBVIEW-113.png) | ![Android 14 with WebView 153](screenshots/ANDROID-14-WEBVIEW-153.png) |

| Android 16 + WebView 134 | Android 16 + WebView 153 |
|---|---|
| ![Android 16 with WebView 134](screenshots/ANDROID-16-WEBVIEW-134.png) | ![Android 16 with WebView 153](screenshots/ANDROID-16-WEBVIEW-153.png) |

## Reproduction

Install dependencies, sync Android, and run the Android project:

```bash
pnpm install
pnpm build
```

Then test using different Android System WebView versions.

## Related Capacitor changes

- https://github.com/ionic-team/capacitor/pull/8535
- https://github.com/ionic-team/capacitor/pull/8599
- https://github.com/ionic-team/capacitor/pull/8604
