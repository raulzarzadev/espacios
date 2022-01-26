package handlers

import (
	"fmt"
	"net/http"
	"spaces/internal/models"
	"spaces/pkg/storage"

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

	ctx.JSON(http.StatusOK, space)
}

func (Space) UploadFiles(ctx *gin.Context) {
	// Parsing client request
	form, err := ctx.MultipartForm()
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// TODO: Get Id User from JWT...
	dummyIdUser := "fcf938e4-463c-4cb2-86f4-4385b4fe21f7"
	idSpace := ctx.Param("id")
	filesLocation := fmt.Sprintf(
		"/users/%s/spaces/%s/pictures/", dummyIdUser, idSpace,
	)
	files := make([]storage.File, 0, len(form.File["files"]))
	for _, formFile := range form.File["files"] {
		data, err := formFile.Open()
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		files = append(files, storage.File{
			Filename: filesLocation + formFile.Filename,
			Size:     formFile.Size,
			Data:     data,
		})
	}

	// Uploading files to storage server
	minioClient, err := storage.OpenConnection()
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	uploadInfo := make([]storage.UploadInfo, 0, len(files))
	for _, f := range files {
		info, err := minioClient.UploadFile(f)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		uploadInfo = append(uploadInfo, info)
	}

	ctx.JSON(http.StatusOK, uploadInfo)
}
