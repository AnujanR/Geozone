package server

import (
	"net/http"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

//publish to the server
func ServerPublish(mainData string,subData string,fiveData string,newsData string) {
	//create echo object
	e := echo.New()
	//middleware
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:1323", "http://localhost:4200"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
		AllowMethods: []string{http.MethodGet, http.MethodHead, http.MethodPut, http.MethodPatch, http.MethodPost, http.MethodDelete},
	}))
	
	//create a get request for mainData
	e.GET("/mainData", func(c echo.Context) error {
		return c.String(http.StatusOK, mainData)
	})
	//create a get request for subData
	e.GET("/subData", func(c echo.Context) error {
		return c.String(http.StatusOK, subData)
	})
	//create a get request for fiveData
	e.GET("/fiveData", func(c echo.Context) error {
		return c.String(http.StatusOK, fiveData)
	})
	//create a get request for newsData
	e.GET("/newsData", func(c echo.Context) error {
		return c.String(http.StatusOK, newsData)
	})
	e.POST("/searchData", func(c echo.Context) error {
		return c.String(http.StatusOK, "")
	})
		//create a get request for newsData
		e.POST("/ne", func(c echo.Context) error {
			return c.String(http.StatusOK, "fgfhghfh")
		})
	//start the server
	e.Logger.Fatal(e.Start(":1323"))
}