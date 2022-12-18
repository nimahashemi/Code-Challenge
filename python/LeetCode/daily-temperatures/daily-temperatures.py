from typing import List


def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
    temps = dict()

    for i in range(30, 101):
        temps[i] = []

    for index, temp in enumerate(temperatures):
        temps[temp].append(index)

    ans = []
    for temp in temperatures:
        closestTemp = 0
        closestIndex = 0
        for i in range(temp + 1, 101):
            if temps[i]:
                if not closestIndex or closestIndex > temps[i][0]:
                    closestIndex = temps[i][0]
                    closestTemp = i
        if closestIndex == 0:
            temps[temp].pop(0)
            ans.append(0)
            continue
        ans.append(temps[closestTemp][0] - temps[temp].pop(0))

    return ans
