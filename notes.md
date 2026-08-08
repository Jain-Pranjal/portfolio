# setting up the prettier, husk, eslinting

```bash
For husky:

--> pnpm add -D husky lint-staged
--> pnpm dlx husky init

then add the hooks in the husky folder by making the eslintconfig also

MAKE THE ESLINT CONFIG
COPY the eslint.config.mjs (it contains all the linting rules )


FOR linting
--> pnpm add -D @commitlint/cli @commitlint/config-conventional

and then make the **commitlint.config.cjs**


--> Add the conifg of lint-staged in package.json
"""
"lint-staged": {
        "*.{js,jsx,ts,tsx}": [
            "prettier --write",
            "eslint --fix"
        ],
        "*.{json,md,yml,yaml,css,scss}": [
            "prettier --write"
        ]
    },

"""



For Prettier:
add the same prettier config annd ignore (COPY that)

also add by
--> pnpm add -D prettier prettier-plugin-tailwindcss
```

## Tags

Git tags help locate a particular commit that we have released or deployed. It is a reference to a specific commit in the git history.
and we use the Annotated tag (recommended)

Stores:

tagger identity
tagger date
message
referenced object

```bash
git tag -a v1.0.0 -m "First Production Release"

git push origin v1.0.0
```

and we create a tag after the PR has been merged to the master branch and we have deployed the code to production.
