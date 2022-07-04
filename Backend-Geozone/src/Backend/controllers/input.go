package controllers

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

/* Prompt an Input from the user which asks for the city name and country code */
func PromptInput() (string,string){
	scannerInput := bufio.NewScanner(os.Stdin)
	fmt.Print("Enter Your City Name : ") //display message
	scannerInput.Scan()                  //read the city name
	cityName := scannerInput.Text()      //store the city name in a variable

	fmt.Print("Enter Your Country Code : ")                     //display message
	scannerInput.Scan()                                         //read the country code
	coutryCode := scannerInput.Text()                           //store the country code in a variable
	city:=strings.Title(cityName)
	country:=strings.Title(coutryCode)

	return city, country
}