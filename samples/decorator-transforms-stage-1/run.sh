#!/bin/bash

pnpm exec babel $PWD/input.js \
  --out-file $PWD/output.js \
  --config-file $PWD/babel.config.json
