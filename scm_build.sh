#!/bin/bash
set -e

export HUSKY_SKIP_INSTALL=true

npx @byted-eden/pipeline@latest --scene scm
