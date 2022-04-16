package handlers

import (
	"database/sql"
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
		Name:           sql.NullString{String: s.Name, Valid: true},
		Guests:         sql.NullInt16{Int16: int16(s.Guests), Valid: true},
		SafeBoxCode:    sql.NullString{String: s.SafeBoxCode, Valid: true},
		Notes:          sql.NullString{String: s.Notes, Valid: true},
		Contract:       sql.NullString{String: s.Contract, Valid: true},
		Pictures:       s.Pictures,
		Url:            sql.NullString{String: s.Url, Valid: true},
	}
	space, err = space.Create()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, Space{
		Id:             space.Id,
		IdTeam:         space.IdTeam,
		IdSpaceType:    space.IdSpaceType,
		IdPropertyType: space.IdPropertyType,
		IdAddress:      space.IdAddress,
		Name:           space.Name.String,
		Guests:         int(space.Guests.Int16),
		SafeBoxCode:    space.SafeBoxCode.String,
		Notes:          space.Notes.String,
		Contract:       space.Contract.String,
		Pictures:       space.Pictures,
		Url:            space.Url.String,
	})
}

func (s Space) Read(ctx *gin.Context) {
	idSpace, err := uuid.Parse(ctx.Param("id"))
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	space := models.Space{
		Id: idSpace,
	}
	space, err = space.Read()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, Space{
		Id:             space.Id,
		IdTeam:         space.IdTeam,
		IdSpaceType:    space.IdSpaceType,
		IdPropertyType: space.IdPropertyType,
		IdAddress:      space.IdAddress,
		Name:           space.Name.String,
		Guests:         int(space.Guests.Int16),
		SafeBoxCode:    space.SafeBoxCode.String,
		Notes:          space.Notes.String,
		Contract:       space.Contract.String,
		Pictures:       space.Pictures,
		Url:            space.Url.String,
	})
}

func (s Space) List(ctx *gin.Context) {
	listSpaces, err := models.Space{}.ReadAll()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	spaces := make([]Space, 0, len(listSpaces))
	for _, space := range listSpaces {
		spaces = append(spaces, Space{
			Id:             space.Id,
			IdTeam:         space.IdTeam,
			IdSpaceType:    space.IdSpaceType,
			IdPropertyType: space.IdPropertyType,
			IdAddress:      space.IdAddress,
			Name:           space.Name.String,
			Guests:         int(space.Guests.Int16),
			SafeBoxCode:    space.SafeBoxCode.String,
			Notes:          space.Notes.String,
			Contract:       space.Contract.String,
			Pictures:       space.Pictures,
			Url:            space.Url.String,
		})
	}

	ctx.JSON(http.StatusOK, spaces)

}

func (s *Space) Update(ctx *gin.Context) {
	err := ctx.BindJSON(&s)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	space := models.Space{
		Id:             s.Id,
		IdTeam:         s.IdTeam,
		IdSpaceType:    s.IdSpaceType,
		IdPropertyType: s.IdPropertyType,
		IdAddress:      s.IdAddress,
		Name:           sql.NullString{String: s.Name, Valid: true},
		Guests:         sql.NullInt16{Int16: int16(s.Guests), Valid: true},
		SafeBoxCode:    sql.NullString{String: s.SafeBoxCode, Valid: true},
		Notes:          sql.NullString{String: s.Notes, Valid: true},
		Contract:       sql.NullString{String: s.Contract, Valid: true},
		Pictures:       s.Pictures,
		Url:            sql.NullString{String: s.Url, Valid: true},
	}
	space, err = space.Update()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, Space{
		Id:             space.Id,
		IdTeam:         space.IdTeam,
		IdSpaceType:    space.IdSpaceType,
		IdPropertyType: space.IdPropertyType,
		IdAddress:      space.IdAddress,
		Name:           space.Name.String,
		Guests:         int(space.Guests.Int16),
		SafeBoxCode:    space.SafeBoxCode.String,
		Notes:          space.Notes.String,
		Contract:       space.Contract.String,
		Pictures:       space.Pictures,
		Url:            space.Url.String,
	})
}

func (Space) Delete(ctx *gin.Context) {
	idSpace, err := uuid.Parse(ctx.Param("id"))
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	space := models.Space{
		Id: idSpace,
	}
	err = space.Delete()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, Space{})
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
		"/users/%s/spaces/%s/", dummyIdUser, idSpace,
	)
	files := make([]storage.File, 0, len(form.File["files"]))
	for _, formFile := range form.File["files"] {
		data, err := formFile.Open()
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
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
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
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

func (Space) DownloadFile(ctx *gin.Context) {
	minioClient, err := storage.OpenConnection()
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// TODO: Get Id User from JWT...
	dummyIdUser := "fcf938e4-463c-4cb2-86f4-4385b4fe21f7"
	idSpace := ctx.Param("id")
	filename := ctx.Param("name")
	filename = fmt.Sprintf(
		"/users/%s/spaces/%s/%s", dummyIdUser, idSpace, filename,
	)
	url, err := minioClient.DownloadFile(filename)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, url)
}
