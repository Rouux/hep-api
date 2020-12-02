#!/bin/bash

while true; do
  read -p "You sure want to deploy (develop -> main) ? [y/N]: " yn
  case $yn in
  [Yy]*)
    git stash
    git checkout main
    git push heroku main
    git checkout -
    git stash pop
    # git push origin develop:main
    break
    ;;
  *)
    echo "Deployment canceled."
    exit
    ;;
  esac
done
