package controllers

import (
	"encoding/json"
	"fmt"
)

//struct for News weather data for the frontend => #section1
type newsData struct{
	Title string 
	Link string
	Description string
	PubDate string
	ImageURL string
	SourceID string
}

/* export Main data as a json payload to the server */
func ExportNewsData(title string, link string, description string, pubdate string,url string, source string) string {
	//combine and group the extracted data to the new json payload
	store := newsData{
	Title : title,
	Link : link,
	Description : description,
	PubDate : pubdate,
	ImageURL : url,
	SourceID : source,
	}
	//Marshal the data into JSON format
	localData, err := json.Marshal(store)
	if err != nil {
		fmt.Println(err)
	}
	
	return string(localData)
}
