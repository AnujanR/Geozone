package main

/* importing go libraries */
import (
	"WeatherApp/controllers"
	"WeatherApp/server"
	"encoding/json"
	"fmt"
	"strings"
)

/*API KEY*/
const (
	apiKeyOWM  = "75c150e42d3efb8adc8d819361985205"
	apiKeyNDIO = "pub_8846849c1b7f5320552e3083b92806ccab97"
)

/* structure of the json data to consume
helpful links  :- https://mholt.github.io/json-to-go/ */
type weatherInfo struct {
	Coord struct {
		Lon float64 `json:"lon"`
		Lat float64 `json:"lat"`
	} `json:"coord"`
	Weather []struct {
		ID          int    `json:"id"`
		Main        string `json:"main"`
		Description string `json:"description"`
		Icon        string `json:"icon"`
	} `json:"weather"`
	Base string `json:"base"`
	Main struct {
		Temp      float64 `json:"temp"`
		FeelsLike float64 `json:"feels_like"`
		TempMin   float64 `json:"temp_min"`
		TempMax   float64 `json:"temp_max"`
		Pressure  int     `json:"pressure"`
		Humidity  int     `json:"humidity"`
		SeaLevel  int     `json:"sea_level"`
		GrndLevel int     `json:"grnd_level"`
	} `json:"main"`
	Visibility int `json:"visibility"`
	Wind       struct {
		Speed float64 `json:"speed"`
		Deg   int     `json:"deg"`
		Gust  float64 `json:"gust"`
	} `json:"wind"`
	Clouds struct {
		All int `json:"all"`
	} `json:"clouds"`
	Dt  int `json:"dt"`
	Sys struct {
		Country string `json:"country"`
		Sunrise int    `json:"sunrise"`
		Sunset  int    `json:"sunset"`
	} `json:"sys"`
	Timezone int    `json:"timezone"`
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Cod      int    `json:"cod"`
}

type News struct {
	Status       string `json:"status"`
	TotalResults int    `json:"totalResults"`
	Results      []struct {
		Title       string      `json:"title"`
		Link        string      `json:"link"`
		Keywords    []string    `json:"keywords"`
		Creator     []string    `json:"creator"`
		VideoURL    interface{} `json:"video_url"`
		Description string      `json:"description"`
		Content     string      `json:"content"`
		PubDate     string      `json:"pubDate"`
		ImageURL    interface{} `json:"image_url"`
		SourceID    string      `json:"source_id"`
		Country     []string    `json:"country"`
		Category    []string    `json:"category"`
		Language    string      `json:"language"`
	} `json:"results"`
	NextPage int `json:"nextPage"`
}

type FiveDay struct {
	Cod     string `json:"cod"`
	Message int    `json:"message"`
	Cnt     int    `json:"cnt"`
	List    []struct {
		Dt   int `json:"dt"`
		Main struct {
			Temp      float64 `json:"temp"`
			FeelsLike float64 `json:"feels_like"`
			TempMin   float64 `json:"temp_min"`
			TempMax   float64 `json:"temp_max"`
			Pressure  int     `json:"pressure"`
			SeaLevel  int     `json:"sea_level"`
			GrndLevel int     `json:"grnd_level"`
			Humidity  int     `json:"humidity"`
			TempKf    float64 `json:"temp_kf"`
		} `json:"main"`
		Weather []struct {
			ID          int    `json:"id"`
			Main        string `json:"main"`
			Description string `json:"description"`
			Icon        string `json:"icon"`
		} `json:"weather"`
		Clouds struct {
			All int `json:"all"`
		} `json:"clouds"`
		Wind struct {
			Speed float64 `json:"speed"`
			Deg   int     `json:"deg"`
			Gust  float64 `json:"gust"`
		} `json:"wind"`
		Visibility int `json:"visibility"`
		Pop        int `json:"pop"`
		Sys        struct {
			Pod string `json:"pod"`
		} `json:"sys"`
		DtTxt string `json:"dt_txt"`
		Rain  struct {
			ThreeH float64 `json:"3h"`
		} `json:"rain,omitempty"`
	} `json:"list"`
	City struct {
		ID    int    `json:"id"`
		Name  string `json:"name"`
		Coord struct {
			Lat float64 `json:"lat"`
			Lon float64 `json:"lon"`
		} `json:"coord"`
		Country    string `json:"country"`
		Population int    `json:"population"`
		Timezone   int    `json:"timezone"`
		Sunrise    int    `json:"sunrise"`
		Sunset     int    `json:"sunset"`
	} `json:"city"`
}

//struct for sub weather data for the frontend => #section2
type fiveDay struct {
	Humidity    int
	Temperature float64
	Icon        string
	Date        string
}

type newsdata struct {
	Title       string
	Link        string
	Description string
	PubDate     string
	ImageURL    interface{}
	SourceID    string
}

var mainData string = ""
var subData string = ""

/* read and extract relevant data from json */
func extractData(jsonData []byte) {
	var weather weatherInfo                   //create a new instance of the struct
	err := json.Unmarshal(jsonData, &weather) //unmarshal
	if err != nil {                           //check for errors
		fmt.Println("Error in JSON Unmarshalling")
		fmt.Println(err.Error())
	}
	//display the relevant data from the openweathermap  data api
	fmt.Println((strings.Repeat("=", 14)) + " Weather Information " + (strings.Repeat("=", 15)))
	fmt.Printf("↪  Country Code : %s \n↪  City Name : %s \n↪  Temperature : %f \n↪  Pressure : %d \n↪  Humidity : %d \n", weather.Sys.Country, weather.Name, weather.Main.Temp, weather.Main.Pressure, weather.Main.Humidity)
	fmt.Println((strings.Repeat("=", 50)))

	mainData = controllers.ExportMainData(weather.Name, weather.Sys.Country, weather.Weather[0].Description, weather.Main.Temp, weather.Main.TempMin, weather.Main.TempMax, weather.Weather[0].Icon, weather.Coord.Lon, weather.Coord.Lat)
	subData = controllers.ExportSubData(weather.Main.Temp, weather.Main.Pressure, weather.Main.Humidity, weather.Wind.Speed, weather.Wind.Deg, weather.Sys.Sunrise, weather.Sys.Sunset, weather.Main.TempMax, weather.Main.TempMin)
}

var FiveData string = ""

/* read and extract relevant data from json */
func extractFiveData(jsonData []byte) {
	var fiveWeather FiveDay                       //create a new instance of the struct
	err := json.Unmarshal(jsonData, &fiveWeather) //unmarshal
	if err != nil {                               //check for errors
		fmt.Println("Error in JSON Unmarshalling")
		fmt.Println(err.Error())
	}

	//combine and group the extracted data to the new json payload
	dt := 8
	day1 := fiveDay{
		Humidity:    fiveWeather.List[dt].Main.Humidity,
		Temperature: fiveWeather.List[dt].Main.Temp,
		Icon:        fiveWeather.List[dt].Weather[0].Icon,
		Date:        fiveWeather.List[dt].DtTxt,
	}
	day2 := fiveDay{
		Humidity:    fiveWeather.List[dt*2].Main.Humidity,
		Temperature: fiveWeather.List[dt*2].Main.Temp,
		Icon:        fiveWeather.List[dt*2].Weather[0].Icon,
		Date:        fiveWeather.List[dt*2].DtTxt,
	}
	day3 := fiveDay{
		Humidity:    fiveWeather.List[dt*3].Main.Humidity,
		Temperature: fiveWeather.List[dt*3].Main.Temp,
		Icon:        fiveWeather.List[dt*3].Weather[0].Icon,
		Date:        fiveWeather.List[dt*3].DtTxt,
	}
	day4 := fiveDay{
		Humidity:    fiveWeather.List[dt*4].Main.Humidity,
		Temperature: fiveWeather.List[dt*4].Main.Temp,
		Icon:        fiveWeather.List[dt*4].Weather[0].Icon,
		Date:        fiveWeather.List[dt*4].DtTxt,
	}
	day5 := fiveDay{
		Humidity:    fiveWeather.List[(dt*4)+7].Main.Humidity,
		Temperature: fiveWeather.List[(dt*4)+7].Main.Temp,
		Icon:        fiveWeather.List[(dt*4)+7].Weather[0].Icon,
		Date:        fiveWeather.List[(dt*4)+7].DtTxt,
	}
	//	alldays := map[string]fiveDay{"day1": day1, "day2": day2, "day3": day3, "day4": day4, "day5": day5}

	alldays := []fiveDay{day1, day2, day3, day4, day5}
	//Marshal the data into JSON format
	localData, err := json.Marshal(alldays)
	if err != nil {
		fmt.Println(err)
	}
	FiveData = string(localData)
}

var newsData string = ""

/* read and extract relevant data from json */
func newsExtractData(jsonData []byte) {
	var newsExo News                          //create a new instance of the struct
	err := json.Unmarshal(jsonData, &newsExo) //unmarshal

	if err != nil { //check for errors
		fmt.Println("Error in JSON Unmarshalling")
		fmt.Println(err.Error())
	}

	allnews := []newsdata{}
	// newsData = controllers.ExportNewsData(newsExo.Results[0].Title, newsExo.Results[0].Link,newsExo.Results[0].Description,newsExo.Results[0].PubDate,newsExo.Results[0].Language,newsExo.Results[0].SourceID )

	for _, item := range newsExo.Results {
		// allnews = append(allnews, item.Title, item.Link,item.Description, item.PubDate, item.Language, item.SourceID)
		allnews = append(allnews, newsdata{
			Title:       item.Title,
			Link:        item.Link,
			Description: item.Description,
			PubDate:     item.PubDate,
			ImageURL:    item.ImageURL,
			SourceID:    item.SourceID,
		})
	}
	//Marshal the data into JSON format
	localData, err := json.Marshal(allnews)
	newsData = (string(localData))
}

//Entry point main function
func main() {
	var city, country = controllers.PromptInput()
	urlOWM := fmt.Sprintf("http://api.openweathermap.org/data/2.5/weather?q=%s,%s&APPID=%s", city, country, apiKeyOWM)

	getD := controllers.GetData(urlOWM) //retrieve data from api
	extractData(getD)

	url := fmt.Sprintf("https://newsdata.io/api/1/news?apikey=%s&q=weather", apiKeyNDIO)
	retds := controllers.GetData(url)
	newsExtractData(retds)

	ur := fmt.Sprintf("https://api.openweathermap.org/data/2.5/forecast?q=%s,%s&APPID=%s", city, country, apiKeyOWM)
	re := controllers.GetData(ur)
	extractFiveData(re)
	server.ServerPublish(mainData, subData, FiveData, newsData)
}
