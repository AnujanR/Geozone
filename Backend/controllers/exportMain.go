package controllers

import (
	"WeatherApp/logic"
	"encoding/json"
	"fmt"
	"math"
)

//struct for Main weather data for the frontend => #section1
type weatherDataMain struct {
	CityName    string
	Country     string
	Description string
	Temperature float64
	TempMin     float64
	TempMax     float64
	Icon        string
	Longtitude float64
	Latitude float64
}

/* export Main data as a json payload to the server */
func ExportMainData(name string, country string, desc string, temp float64, tempMin float64,tempMax float64, icon string,longtitude float64, latitude float64) string {
	//combine and group the extracted data to the new json payload
	store := weatherDataMain{
		CityName:    name,
		Country:     country,
		Description: desc,
		Temperature: math.Round(temp-273.15),
		TempMin:     logic.RoundFloat(tempMin-273.15,1),
		TempMax:     logic.RoundFloat(tempMax-273.15,1),
		Icon:        icon,
		Longtitude:longtitude,
		Latitude : latitude,
	}
	//Marshal the data into JSON format
	localData, err := json.Marshal(store)
	if err != nil {
		fmt.Println(err)
	}
	
	return string(localData)
}
