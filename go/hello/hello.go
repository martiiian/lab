package main

import (
  "fmt"
  "martiiian/greetings"
)

func main() {
  message := greetings.Hello("Gladys")
  fmt.Println(message)
}

