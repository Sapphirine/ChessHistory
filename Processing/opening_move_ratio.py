import csv
import json

output = []
decade = {}
iter = 0

with open('opening_move_ratio.csv') as csvfile:
    data = csv.reader(csvfile,delimiter=',')
    for line in data:
        if iter == 0:
            iter = 1
            continue
        item = {}
        item["year"] = line[0]
        item["e4"] = line[1]
        item["d4"] = line[2]
        item["Nf3"] = line[3]
        item["c4"] = line[4]
        item["Other"] = line[5]

        output.append(item)

print(output)

json = json.dumps(output)
f = open("opening_move_ratio.data","w")
f.write(json)
f.close()
