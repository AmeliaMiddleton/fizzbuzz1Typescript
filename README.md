# fizzbuzz1Typescript
This is a fizzbuzz example and how to create an compile a typescript program

ran:
    npm init -y (Done)
    npm i -D typescript @types/node (Done)
    npx tsc --init --rootDir src --outDir dist --module nodenext --target es2022 --strict (Done)

    Now edit tsconfig.json and make these small tweaks (best-practice for a modern Node TS project): (Done)
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





Add src/index.ts
function fizzBuzzStringConcat(n: number): void {
    for (let i = 1; i <= n; i++) {
        let output = ''; // Start with an empty string

        if (i % 3 === 0) {
            output += 'Fizz'; // Append "Fizz" if divisible by 3
        }
        if (i % 5 === 0) {
            output += 'Buzz'; // Append "Buzz" if divisible by 5
        }
        
        // Log "output" if it has content, otherwise log the number
        console.log(output || i); 
    }
}

// Example usage:
fizzBuzzStringConcat(20);
