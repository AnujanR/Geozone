package controllers

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
)

/* Implementation of GET request to retrieve data from  API */
func GetData(URL string) []byte {
	urlOWM := fmt.Sprintf("%s", URL)
	urlParse, err := url.Parse(urlOWM) //parse url
	cleanURL, err := http.Get(urlParse.String())

	if err != nil { //check for errors
		log.Fatal(err)
	}

	jsonData, err := ioutil.ReadAll(cleanURL.Body) //read all the data from the body

	if err != nil { //check for errors
		log.Fatal(err)
	}

	defer cleanURL.Body.Close() //close body after getting the response
	
	return jsonData    //return relevant data 

}