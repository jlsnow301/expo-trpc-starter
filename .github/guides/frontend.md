# Front end development

This project uses Expo with API routes, a very modern take on React Native development.

It's full stack, so the server files are colocated with the frontend (and db) files.

It uses the file router in /app, so navigation is done with the url and associated file structure.

## Getting started

1. Install the recommended extensions:

- [Prettier](https://prettier.io/docs/en/editors)
- [Biomejs](https://biomejs.dev/guides/editors/first-party-extensions/)

2. Install dependencies:

```bash
npm i
```

You'll need to install deps any time there is a change to the package.json file.

3. Start the app

```bash
npx expo start
```

4. Navigate to the app folder to make changes to the UI.

## Development Guidelines

- Using a tRPC procedure does not require usestate or useeffect. There are examples of this in existing pages.
- If you're not familiar with tRPC or React Query - I suggest reading into it to help with fetching data.
- React (and therefore Expo) components are best written with TypeScript, so use that when possible.
- Try to keep your code as readable as possible. Obvious var names, simple functions, and short components.
- Components should be inbetween 30-100 lines of code. You can split things up as needed. A good breakpoint is on .map().
- use useState and useEffect only when strictly necessary, for user interactions or other.

## Extra resources

https://docs.expo.dev/get-started/start-developing/
