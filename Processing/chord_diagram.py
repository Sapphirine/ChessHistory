import csv
import json

output = []
iter = 0

with open('chord_diagram.csv') as csvfile:
    data = csv.reader(csvfile,delimiter=',')
    for line in data:
        if iter == 0:
            iter = 1
            continue
        P1_last, P1_first = line[0].split(",")
        P2_last, P2_first = line[1].split(",")

        item = {}
        item["from"] = P1_last
        item["to"] = P2_last
        item["value"] = line[4]
        item["P1 score"] = line[2]
        item["P2 score"] = line[3]
        output.append(item)

print(output)

json = json.dumps(output)
f = open("chord_diagram.data","w")
f.write(json)
f.close()
