import json
import argparse
from os import path
import os

parser = argparse.ArgumentParser()
parser.add_argument('--file')
parser.add_argument('--element')
parser.add_argument('--action')
args = parser.parse_args()

print("JSON UPDATE PARAMETERS")
print(args.file, args.element, args.action)

with open(path.join(os.getcwd(), args.file), "r") as file:
    json_data = json.load(file)

if args.action == 'delete':
    print("DELETING ELEMENT")
    del json_data[args.element]

with open(path.join(os.getcwd(), args.file), 'w') as file:
    json.dump(json_data, file)