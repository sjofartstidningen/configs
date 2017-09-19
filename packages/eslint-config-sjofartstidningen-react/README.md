# eslint-config-sjofartstidningen-react

## Installation

```shell
# NPM
(
  export PKG=eslint-config-sjofartstidningen-react;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)

# Yarn
(
  export PKG=eslint-config-sjofartstidningen-react;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
)
```

## Setup

`.eslintrc`:

```json
{
  "extends": ["sjofartstidningen-react"]
}
```
