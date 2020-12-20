import csv
import json

output = {}
iter = 0

with open('player_ELO.csv') as csvfile:
    data = csv.reader(csvfile,delimiter=',')
    for line in data:
        if iter == 0:
            iter = 1
            continue
        if line[0] not in output.keys():
            output[line[0]] = []
        item = {}
        item["year"] = line[1]
        item["elo"] = int(line[2][:4])

        output[line[0]].append(item)

print(output)

json = json.dumps(output)
f = open("player_ELO.data","w")
f.write(json)
f.close()
