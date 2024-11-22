#!/bin/bash

set -e

BASE_DIR="app"
css_files=$(find . -type f -name "*.css" -not -path "*/.venv/*" -not -path "*/staticfiles/*")
js_files=$(find . -type f -name "*.js" -not -path "*/.venv/*" -not -path "*/staticfiles/*")
html_files=$(find . -type f -name "*.html" -not -path "*/.venv/*" -not -path "*/staticfiles/*")

: "${VIRTUAL_ENV?Python virtual env must be aœctive}"

echo "Executing flake8..." && flake8 app
echo "Executing DjangoLinter..." && djlint $html_files --lint
echo "Executing isort..." && isort app
echo "Executing black..." && black app
echo "Executing JS-Beautifier..." && js-beautify $js_files
echo "Executing CSS-Beautifier..." && css-beautify -r $css_files
echo "Executing DJFormater..." && djlint $html_files --quiet --reformat