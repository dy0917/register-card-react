#!/usr/bin/env sh
npm run build
git add build -f
git commit -am "adding deploy"
git subtree push --prefix build https://github.com/dy0917/register-card-react.git gh-pages