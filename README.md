# X-GOVUK ESLint Config

Common [ESLint](https://eslint.org) configuration for X-GOVUK projects.

It is loosely based on [the configuration proposed for use by GOV.UK Frontend](https://github.com/alphagov/govuk-frontend/pull/5498).

## Requirements

Node.js v18 or later.

## Installation

```shell
npm install @x-govuk/eslint-config
```

## Usage

See the [ESLint documentation on combining configs](https://eslint.org/docs/latest/use/configure/combine-configs). Example:

```js
import xGovukConfig from "@x-govuk/eslint-config";

export default [
  ...xGovukConfig,
  {
    ignores: ["foo", "bar.js"],
  },
];
```

## Contributing

Bug reports and feature requests are welcome. Please raise an issue or submit a pull request.

## Releasing a new version

`npm run release`

This command will ask you what version you want to use. It will then publish a new version on NPM, create and push a new git tag and then generate release notes ready for posting on GitHub.

> [!NOTE]
> Releasing a new version requires permission to publish packages to the `@x-govuk` organisation.
