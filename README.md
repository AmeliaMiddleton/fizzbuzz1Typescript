# fizzbuzz1Typescript
This is a fizzbuzz example and how to create an compile a typescript program

ran:
    npm init -y (Done)
    npm i -D typescript @types/node (Done)
    npx tsc --init --rootDir src --outDir dist --module nodenext --target es2022 --strict (Done)

    Now edit tsconfig.json and make these small tweaks (best-practice for a modern Node TS project):
    {
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist",

    "module": "nodenext",
    "target": "es2022",
    "lib": ["es2022"],

    "strict": true,
    "sourceMap": true,

    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    "verbatimModuleSyntax": true,
    "skipLibCheck": true
  }
}





