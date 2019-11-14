#!/bin/sh
rm .openzeppelin/dev-*
python3 json_update.py --file .openzeppelin/project.json --action delete --element contracts
rm build/contracts/*
ganache-cli --deterministic
