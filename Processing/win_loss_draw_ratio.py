import csv
import json

output = []
decade = {}
iter = 0

with open('win_loss_draw_ratio.csv') as csvfile:
    data = csv.reader(csvfile,delimiter=',')
    for line in data:
        if iter == 0:
            iter = 1
            continue
        item = {}
        item["year"] = line[0]
        item["white"] = line[1]
        item["black"] = line[2]
        item["draw"] = line[3]

        output.append(item)

print(output)

json = json.dumps(output)
f = open("win_loss_draw_ratio.data","w")
f.write(json)
f.close()
