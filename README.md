- ADONIS.JS 5 & VUE.JS 3 MPA EXAMPLE
- This is just an example project for learning Adonis.js V5 (with typsecript) and Vue.js 3 (lazy-loaded/code-splitted components) in an MPA (Multi Page Application).
- For more info about Adonis V5, go to https://preview.adonisjs.com/ or https://preview.adonisjs.com/blog/introducing-adonisjs-v5/

**********************************

- LOCAL INSTALLATION:
- copy the .env.example and add your credentials such as : 
```
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=6uAi51riDxmcX1eUXmxeck1b8m-1w3Rh
SESSION_DRIVER=cookie
CACHE_VIEWS=false
DB_CONNECTION=mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DB_NAME=adonis
```
- then run :
- node ace migration:run
- node ace db:seed
- node ace serve --watch
- node ace mix:watch (in a different terminal) 
- (Optional) to run the tests, do :
- node -r @adonisjs/assembler/build/register japaFile.ts

**********************************

- COMMANDS USED, AND PACKAGES INSTALLED, TO CREATE THIS PROJECT 

- npm init adonis-ts-app project-name

- to install the auth package:
- npm install @adonisjs/auth@alpha
- npm install phc-argon2
- then run: node ace invoke @adonisjs/auth
- then choose luci, web, User, true

- To install the DB, do:
- npm install @adonisjs/lucid@alpha
- to set up the db:
- node ace invoke @adonisjs/lucid

- to create a migration:
- node ace make:migration tasks
- node ace migration:run
- node ace migration:rollback
- node ace migration:rollback --batch 0
- node ace db:seed

- to get protected against CSRF attacks, we must run
- npm install @adonisjs/shield@alpha
- and then run node ace invoke @adonisjs/shield

- to run the tests, do :
- node -r @adonisjs/assembler/build/register japaFile.ts

- Popular commands
- node ace --help
- node ace serve --watch
- node ace list:routes
- node ace make:controller PagesController
- node ace make:model Task
- node ace make:seeder User
- node ace mix:build (to build the assets)
- node ace mix:watch (to build the assets and watch for file changes)
- node ace mix:build --production (to build the assets for production)

--

### TailwindCSS

To build the tailwind css file:
```bash
# dev build
npm run build:tw
# prod build (uses purgecss)
npm run build:tw:prod
```

The output file will be located in `public/css/tw.css`.

### Husky git hooks

Inital command used for installation _(already done)_:

```bash
npx husky-init && npm install
npx husky add .husky/pre-commit "npm run test"
```

Husky pre-commit hook is run before commit to use `lint-staged` to auto-format the code being committed.
If you need to skip the pre-commit hook:
```bash
git commit -m "my commit message" --no-verify
```

**********************************

- @TODO:
- figure out how to compile the assets with `mix.ts` instead of `mix.js`
- in TypescriptComponent.vue, figure out how to compile `function pow(x: number, y: number): number {...` and this will allow us to work with typescript in vue components
- figure out how to make work the intended page, after login
