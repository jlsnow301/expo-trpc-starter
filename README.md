# Expo with tRPC & Drizzle starter

This is an [Expo](https://expo.dev) project built to bring T3 to purely mobile apps- it's [T3 turbo](https://github.com/t3-oss/create-t3-turbo) without the NextJS, but by no means a replacement for their implementation. Feel free to clone this repo and build your app using what's here. What you'll find in this repo:

- tRPC wired in via [API Routes](https://docs.expo.dev/router/reference/api-routes/)
- Drizzle (preconfigured for postgres, change as you see fit)
- Eslint & Prettier with some very opinionated rules
- CI for linting
- Very basic auth setup
- A good amount of documentation, see below

## Guides

- [frontend](https://github.com/BlueBridge-Alliance/BlueBridge-Alliance-App/blob/main/.github/guides/frontend.md)
- [backend](https://github.com/BlueBridge-Alliance/BlueBridge-Alliance-App/blob/main/server/guide.md)
- [database](https://github.com/BlueBridge-Alliance/BlueBridge-Alliance-App/blob/main/db/guide.md)

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
