#!/bin/bash

while true; do
  read -p "You sure want to deploy (develop -> master) ? [y/N]: " yn
  case $yn in
  [Yy]*)
    git push origin develop:main
    break
    ;;
  *)
    echo "Deployment canceled."
    exit
    ;;
  esac
done
