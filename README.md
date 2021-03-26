# **Ionic - Nextjs - Tailwind - Capacitor**

## **Description**

This is an Ionic - Nextjs - Tailwind - Capacitor App for educational purposes.

## Reading List

- [Project VSC Management (Mega Important!)](https://capacitorjs.com/docs/cordova#native-project-management)
- [Capacitor Workflow](https://capacitorjs.com/docs/basics/workflow)
- [Using Cordova Plugins and Ionic Native](https://capacitorjs.com/docs/cordova/using-cordova-plugins)

</br>

_Stack Framework Layers_
![layers](https://user-images.githubusercontent.com/24437988/112493886-739b0d80-8d7a-11eb-8dc4-158c3938fb99.png)

## **Demo**

Deploy to <TODO:> [Here](http://TODO:1000). (Allow spin-up time... :grin:)

Feel free to have a play

## **Install**

Must have the following installed on your machine.

- node
- npm
- Android development [Android Studio](https://developer.android.com/studio)
- IOS development on **Mac** requires Xcode 11 or above.
- IOS development on **Windows** [Ionic Appflow](https://ionic.io/appflow) or other alternative emulator

</br>

### **Initial Setup**

There are 6 steps that need to be following in order to get this project to initialise succesfully.

Note: The steps follow can be triggered with command a single command: `npm run build:all`

</br>

1. First we need the Ionic Client.

- `npm install -g @ionic/cli`

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

### **Test Builds**

</br>

[Test Web:](https://nextjs.org/docs/api-reference/cli#production)

- `npm run start`

</br>

[Test IOS:](https://capacitorjs.com/docs/getting-started/dependencies#ios-development)

- `npx cap open ios`

</br>

[Test Android:](https://capacitorjs.com/docs/getting-started/dependencies#android-development)

- `npx cap open android`

## Tadaa!

</br>

## Running App Environments

- Cross Platform Development: `npm run dev`

- Web Production: `npm run start`

- IOS Emulator (Mac Only): `npx cap open ios`

- Andriod Emulator: `npx cap open android`

</br>

# **Development**

When adding plugins to Capacitor it is essential that you perform the following command

- `npx cap sync`

</br>
