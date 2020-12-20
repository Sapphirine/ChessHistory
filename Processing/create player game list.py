f = open("../Raw data/all.pgn","r", encoding="latin-1")

output = []
date = ""
white_player = ""
white_elo = ""
black_player = ""
black_elo = ""
result = ""
iter = 0

for line in f:
    # print(line, end='')
    if line[:6] == "[Date ":
        if date != "" and white_player != "" and black_player != "" and result !=""and result !="*":
            output.append((white_player.replace("'",''), black_player.replace("'",''), result))
            if result!="1-0" and result!="0-1" and result!="1/2-1/2": print(result)

        date = line[7:len(line)-3]
        white_player = ""
        white_elo = ""
        black_player = ""
        black_elo = ""
        result = ""

    if line[:7] == "[White ":     white_player = line[8:len(line) - 3]
    if line[:7] == "[WhiteE":     white_elo = line[11:len(line) - 3]
    if line[:7] == "[Black ":   black_player = line[8:len(line) - 3]
    if line[:7] == "[BlackE":   black_elo = line[11:len(line) - 3]
    if line[:7] == "[Result":   result = line[9:len(line) - 3]

    iter += 1
    if iter % 1000000==0:
        print("length of output is", len(output))


print(iter)
with open("../Raw data/game_results.txt","w", encoding="latin-1") as out:
    for item in output:
        out.write(str(item)+'\n')
