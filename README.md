# X-GOVUK ESLint Config

Common [ESLint](https://eslint.org) configuration for X-GOVUK projects.

It is loosely based on [the configuration proposed for use by GOV.UK Frontend](https://github.com/alphagov/govuk-frontend/pull/5498).

## Requirements

Node.js v20 or later.

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

Update the `version` field in `package.json` and merge this change to `main`.

Then, create a [new release](https://github.com/x-govuk/eslint-config/releases/new) using the GitHub web interface, using a tag in the form `vX.Y.Z` matching the new version (for example `v1.2.3`) and targeting `main`. Publishing the release pushes the tag, which triggers the [publish workflow](.github/workflows/publish.yml) to publish the new version to NPM.

> [!NOTE]
> Releasing a new version requires permission to publish packages to the `@x-govuk` organisation.
