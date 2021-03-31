# **Ionic - Nextjs - Tailwind - Capacitor**

## **Description**

This is an Ionic - Nextjs - Tailwind - Capacitor App.

## Reading List

- [Project VSC Management (Mega Important!)](https://capacitorjs.com/docs/cordova#native-project-management)
- [Capacitor Workflow](https://capacitorjs.com/docs/basics/workflow)
- [Using Cordova Plugins and Ionic Native](https://capacitorjs.com/docs/cordova/using-cordova-plugins)

#

**_Stack Framework Layers_**

<img src="https://user-images.githubusercontent.com/24437988/112493886-739b0d80-8d7a-11eb-8dc4-158c3938fb99.png" alt="example" width="500"/>

## **Requirements**

- [nodejs & npm](https://nodejs.org/en/)
- Android on **Mac & Windows** requires [Android Studio](https://developer.android.com/studio)
- IOS on **Mac** requires [Xcode](https://developer.apple.com/xcode/) 11 or above.
- IOS on **Windows** requires [Ionic Appflow](https://ionic.io/appflow) or other alternative IOS emulator.

</br>

## **Setup Part 1**

There are **6** steps to follow to initialise this project.

**OR** Simply use command **_`npm run build:all`_** to run all the init steps. Once finished you can proceed to **Setup Part 2**

Open /capacitor-android/manifests/AndroidManifest.xml and make sure your XML config contains the following:

1. First we need the Ionic Client.

- `npm install -g @ionic/cli`
- `npm install -g @ionic/cli native-run`

</br>

2. Now lets install all the dependencies.

- `npm i`

</br>

3. We will then need to run the build which will create the .next build folder in or project.

- `npm run build`

</br>

4. This next step is crucial!
   We to export our build as static which can be run standalone without the need of a Node.js server.
   But also it creates the **out** directory that we need before we can include our native device builds.

- `npm run export`

</br>

5. Ok so now we can let Capacitor which platforms we want to build on.

- `npx cap add ios`
- `npx cap add android`

</br>

6. Time to rebuild nextjs, export it, and copy it to the native projects.

- `npm run build`
- `npm run export`
- `npx cap copy`

</br>

## Setup Part 2

**Now all is built we need to add some code manually.**

Open file `./android/app/build.gradle`, you will see something similiar to:

```gradle
android {
   ...
   defaultConfig {
      ...
   }
}
```

Add the code below inside **defaultConfig**, If its not already there.

```gradle
aaptOptions {
   // Without this Android apps just wont work... Read more:
   // https://github.com/ionic-team/capacitor/commit/c23d99315acea2f0894e5ff8a08dd42a867b2982
   ignoreAssetsPattern '!.svn:!.git:!.ds_store:!_.scc:._:!CVS:!thumbs.db:!picasa.ini:!*~'
}
```

# Environments Commands

## Development

- Web: `npm run dev:web`
- IOS (Mac): `npm run dev:ios`
- IOS (Windows): Ionic Appflow or alternative
- Android: `npm run dev:android`
- Web on LAN Network: `npm run dev:network`

## Production

- Web: `npm run start`
- IOS: This will need to be handled via Xcode or Ionic Appflow.
- Android: This is handled in Android Studio apk release.

</br>

# **Important Notes**

- When adding a new Capacitor plugin it is essential that you perform the following command: `npx cap sync`
- To use the Google Fit for Android, you need an OAuth 2.0 client ID for Android applications. [Link1](https://developers.google.com/fit/android/get-api-key).
- Cordova Capacitor plugin variables. [Link1](https://www.joshmorony.com/using-cordova-plugins-that-require-install-variables-with-capacitor/)
- Cordova Capacitor Deep Dive. [Link1](https://www.joshmorony.com/migrating-cordova-plugins-to-capacitor-android/)

</br>

# **Production**

## You MUST remove this from **capacitor.config.json** file

```json
  "server": {
    "url": "http://192.168.0.44:3000"
  }
```

## Production Reading:

- [Next Web App:](https://nextjs.org/docs/api-reference/cli#production)
- [Capacitor IOS App:](https://capacitorjs.com/docs/getting-started/dependencies#ios-development)
- [Capacitor Android App:](https://capacitorjs.com/docs/getting-started/dependencies#android-development)

  // "server": {
  // "url": "http://localhost:2222",
  // "cleartext": true
  // }
