import csv
import json

output = []
iter = 0

with open('data_summary.csv') as csvfile:
    data = csv.reader(csvfile,delimiter=',')
    for line in data:
        if iter == 0:
            iter = 1
            continue

        item = {}
        item["year"] = line[0]
        item["num_games"] = line[1]
        item["num_moves"] = line[2]
        item["avg_elo"] = line[3]
        item["max_elo"] = line[4]

        output.append(item)

print(output)

json = json.dumps(output)
f = open("data_summary.data","w")
f.write(json)
f.close()
