# eslint-config-sjofartstidningen

Base eslint config for Sjöfartstidnigen projects.

## Installation

```shell
# NPM
(
  export PKG=eslint-config-sjofartstidningen;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)

# Yarn
(
  export PKG=eslint-config-sjofartstidningen;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
)
```

This will install eslint-config-sjofartstidningen together with peer dependencies.

## Setup

`.eslintrc`:

```json
{
  "extends": ["sjofartstidningen"]
}
```
