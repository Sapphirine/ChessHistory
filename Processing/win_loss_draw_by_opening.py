import csv
import json

output = {}
iter = 0

with open('win_loss_draw_by_opening.csv') as csvfile:
    data = csv.reader(csvfile,delimiter=',')
    for line in data:
        if iter == 0:
            iter = 1
            continue
        if line[1] not in output.keys():
            output[line[1]] = []
        item = {}
        item["year"] = line[0]
        item["white"] = line[2]
        item["black"] = line[3]
        item["draw"] = line[4]

        output[line[1]].append(item)

print(output)

json = json.dumps(output)
f = open("win_loss_draw_by_opening.data","w")
f.write(json)
f.close()
