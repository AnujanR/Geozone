package controllers

import (
	"encoding/json"
	"fmt"
)

//struct for sub weather data for the frontend => #section2
type weatherDataSub struct {
	Humidity      int
	Temperature   float64
	Pressure      int
	WindSpeed     float64
	WindDirection int
	Sunrise       int
	Sunset        int
	TempMin       float64
	TempMax       float64
}


//========================SUB DATA===================================
/* export sub data as a json payload to the server */
func ExportSubData(Temp float64, Pressure int, Humidity int, WindSpeed float64, WindDirection int, Sunrise int, Sunset int, tempMax float64, tempMin float64)string {
	//combine and group the extracted data to the new json payload
	store := weatherDataSub{
		Humidity:      Humidity,
		Temperature:   Temp,
		Pressure:      Pressure,
		WindSpeed:     WindSpeed,
		WindDirection: WindDirection,
		Sunrise:       Sunrise,
		Sunset:        Sunset,
		TempMin:       tempMin,
		TempMax:       tempMax,
	}
	//Marshal the data into JSON format
	localData, err := json.Marshal(store)
	if err != nil {
		fmt.Println(err)
	}
	return string(localData)
}