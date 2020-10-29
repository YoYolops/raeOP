
email = open('urls.txt', 'r')

grandao = NONE
a = -1
while a + 1 < len(email):

    a += 1

    if email[a] == email[a + 1]:
        continue

    print(email[a])

