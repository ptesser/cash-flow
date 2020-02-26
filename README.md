# Cash Flow

## Database

### Firebase

This project use Firebase as database and hoisting web server.

#### Firestore

1. Create a database `cash-flow`.
2. Create some tables:

    - transactions:
    ```
    amount: number
    description: string
    date: timestamp
    typology: references (cash-flow/typologies)
    ```
    - typologies
    ```
    name: string
    ```

#### Hosting

- `npm i -g firebase-tools`
- `firebase login`
- `firebase init` dalla cartella di gestione del deploy

  - set directory to `cash-flow-webapp/build`
  - use project `index.html`
  - configure rewrite rules for SPA (Single Page Application)

- `firebase deploy`

### Environment

Inside `cash-flow-webapp` create a file `.env` and add these keys:

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

### Deploy

In order to speed deploy step use `npm run deploy-firebase`.
This script will build the app and deploy it on Firebase.

## Commit convention

The project use Angular commit convention:

- https://www.conventionalcommits.org/en/v1.0.0-beta.2/
- https://gist.github.com/stephenparish/9941e89d80e2bc58a153

This convention is enforce by some git pre-hook.

You could make a traditional commit following the syntax rules or use `npm run commit` that help you to construct the commit message in the right way.

## Changelog

You could find the [Changelog](./CHANGELOG.md).

In order to generate a new changelog run `npm run changelog`.

