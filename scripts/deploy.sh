#!/bin/bash

while true; do
  read -p "You sure want to deploy (develop -> main) ? [y/N]: " yn
  case $yn in
  [Yy]*)
    git rebase develop develop
    git checkout main
    git rebase
    git merge develop
    git push origin main
    git push heroku main
    git checkout -
    # git push origin develop:main
    break
    ;;
  *)
    echo "Deployment canceled."
    exit
    ;;
  esac
done
