a = 1
b = int(input("输入一个数字"))
times = len(str(b))
for i in range(times):
    if b < 20:
        a += int(str(a) + str(b % 4))
        b = b * (b % 4)
    else:
        a += int(str(a) + str(int(str(b)[0]) + 1))
        b = round(b % (int(str(b)[0]) + 1))
print(b)
