#!/bin/bash

echo Enter Git Name
read git_name

echo Enter Git Email
read git_email

git config --global user.name "${git_name}"
git config --global user.email "${git_email}"
