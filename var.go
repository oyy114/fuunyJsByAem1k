package main
import "fmt"
func main()  {
	var b, c int = 1, 2
	c, b = b, c
	fmt.Println(b, c)
}