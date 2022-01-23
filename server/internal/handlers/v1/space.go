package handlers

import (
	"fmt"
	"log"
	"net/http"
	"spaces/internal/models"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type Space struct {
	Id             uuid.UUID `json:"id"`
	IdTeam         uuid.UUID `json:"id_team"`
	IdSpaceType    uuid.UUID `json:"id_space_type"`
	IdPropertyType uuid.UUID `json:"id_property_type"`
	IdAddress      uuid.UUID `json:"id_address"`
	Name           string    `json:"name"`
	Guests         int       `json:"guests"`
	SafeBoxCode    string    `json:"safe_box_code"`
	Notes          string    `json:"notes"`
	Contract       string    `json:"contract"`
	Pictures       []string  `json:"pictures"`
	Url            string    `json:"url"`
}

func (s Space) Register(ctx *gin.Context) {
	err := ctx.BindJSON(&s)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	space := models.Space{
		Id:             uuid.New(),
		IdTeam:         s.IdTeam,
		IdSpaceType:    s.IdSpaceType,
		IdPropertyType: s.IdPropertyType,
		IdAddress:      s.IdAddress,
		Name:           s.Name,
		Guests:         s.Guests,
		SafeBoxCode:    s.SafeBoxCode,
		Notes:          s.Notes,
		Contract:       s.Contract,
		Pictures:       s.Pictures,
		Url:            s.Url,
	}
	space, err = space.Create()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	fmt.Printf("Space: %v\n", space)
	ctx.JSON(http.StatusOK, space)
}

func (Space) UploadFiles(ctx *gin.Context) {
	// TODO: Move files to file storage...

	form, _ := ctx.MultipartForm()
	files := form.File["files"]

	for _, file := range files {
		log.Println(file.Filename)
	}

	ctx.JSON(http.StatusOK, "Uploaded...")
}
