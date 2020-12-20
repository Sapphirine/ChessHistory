import csv
import json

output = {}
decade = []
iter = 0

with open('bar.csv') as csvfile:
    data = csv.reader(csvfile,delimiter=',')
    for line in data:
        if iter == 0:
            iter = 1
            continue
        item = {}
        item["network"] = line[1]
        item["MAU"] = line[2]

        if str(line[0]) not in output.keys():
            output[str(line[0])] = []
        output[str(line[0])].append(item)

print(output)

json = json.dumps(output)
f = open("out.json","w")
f.write(json)
f.close()