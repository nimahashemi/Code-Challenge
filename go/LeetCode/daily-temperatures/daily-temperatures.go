package main

// daily-temperatures
// func main() {
// 	tempArr1 := [...]int{73, 74, 75, 71, 69, 72, 76, 73}
// 	dailyTemperatures(tempArr1[:])
// }

func dailyTemperatures(temperatures []int) []int {
	count := 0
	s := len(temperatures)
	output := make([]int, len(temperatures))

	for i := 0; i < s-1; i++ {
		count = 0
		for j := i + 1; j < s; j++ {
			count++
			if temperatures[i] < temperatures[j] {
				output = append(output, count)
				break
			} else if count == s-i-1 {
				output = append(output, 0)
			}
		}
	}
	output = append(output, 0)
	return remove(output)
}

func remove(input []int) []int {
	count := 0
	for i := 0; i < len(input); i++ {
		if input[i] == 0 {
			count++
		} else {
			break
		}
	}
	output := input[count:]
	return output
}
