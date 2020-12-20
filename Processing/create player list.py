f = open("../Raw data/all.pgn","r", encoding="latin-1")

output = []
date = ""
white_player = ""
white_elo = ""
black_player = ""
black_elo = ""

iter = 0

for line in f:
    #print(line)
    if line[:6] == "[Date ":
        if date != "" and white_player != "" and white_elo != "": output.append((date, white_player, white_elo))
        if date != "" and black_player != "" and black_elo != "": output.append((date, black_player, black_elo))

        date = line[7:len(line)-3]
        white_player = ""
        white_elo = ""
        black_player = ""
        black_elo = ""


    if line[:7] == "[White ":     white_player = line[8:len(line) - 3]
    if line[:7] == "[WhiteE":     white_elo = line[11:len(line) - 3]
    if line[:7] == "[Black ":   black_player = line[8:len(line) - 3]
    if line[:7] == "[BlackE":   black_elo = line[11:len(line) - 3]


    iter += 1
    if iter % 1000000==0:
        print("length of output is",len(output))

with open("data/players.txt","w", encoding="latin-1") as out:
    for item in output:
        out.write(str(item)+'\n')
