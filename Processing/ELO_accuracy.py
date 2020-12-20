import csv
import json

output = []
iter = 0

with open('ELO_accuracy.csv') as csvfile:
    data = csv.reader(csvfile,delimiter=',')
    for line in data:
        if iter == 0:
            iter = 1
            continue

        item = {}
        item["elo_diff"] = line[0]
        item["num_games"] = line[1]
        item["white_wins"] = line[2]
        item["black_wins"] = line[3]
        item["draws"] = line[4]
        item["exp_score"] = line[5]
        item["white_avg"] = line[6]
        item["black_avg"] = line[7]
        item["all_avg"] = line[8]

        output.append(item)

print(output)

json = json.dumps(output)
f = open("ELO_accuracy.data","w")
f.write(json)
f.close()
