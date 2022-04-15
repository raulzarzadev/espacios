package handlers

import (
	"database/sql"
	"net/http"
	"spaces/internal/models"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type Address struct {
	Id        uuid.UUID `json:"id"`
	UnitNo    string    `json:"unit_no"`
	Street    string    `json:"street"`
	City      string    `json:"city"`
	State     string    `json:"state"`
	Country   string    `json:"country"`
	ZipCode   string    `json:"zip_code"`
	Latitude  float64   `json:"latitude"`
	Longitude float64   `json:"longitude"`
}

func (a Address) Register(ctx *gin.Context) {
	err := ctx.BindJSON(&a)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	address := models.Address{
		Id:        uuid.New(),
		UnitNo:    sql.NullString{String: a.UnitNo, Valid: true},
		Street:    sql.NullString{String: a.Street, Valid: true},
		City:      sql.NullString{String: a.City, Valid: true},
		State:     sql.NullString{String: a.State, Valid: true},
		Country:   sql.NullString{String: a.Country, Valid: true},
		ZipCode:   sql.NullString{String: a.ZipCode, Valid: true},
		Latitude:  sql.NullFloat64{Float64: a.Latitude, Valid: true},
		Longitude: sql.NullFloat64{Float64: a.Longitude, Valid: true},
	}
	address, err = address.Create()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, Address{
		Id:        address.Id,
		UnitNo:    address.UnitNo.String,
		Street:    address.Street.String,
		City:      address.City.String,
		State:     address.State.String,
		Country:   address.Country.String,
		ZipCode:   address.ZipCode.String,
		Latitude:  address.Latitude.Float64,
		Longitude: address.Longitude.Float64,
	})
}

func (s Address) Read(ctx *gin.Context) {
	idAddress, err := uuid.Parse(ctx.Param("id"))
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	address := models.Address{
		Id: idAddress,
	}
	address, err = address.Read()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, Address{
		Id:        address.Id,
		UnitNo:    address.UnitNo.String,
		Street:    address.Street.String,
		City:      address.City.String,
		State:     address.State.String,
		Country:   address.Country.String,
		ZipCode:   address.ZipCode.String,
		Latitude:  address.Latitude.Float64,
		Longitude: address.Longitude.Float64,
	})
}

func (s Address) List(ctx *gin.Context) {
	listAddresses, err := models.Address{}.ReadAll()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	addresses := make([]Address, 0, len(listAddresses))
	for _, address := range listAddresses {
		addresses = append(addresses, Address{
			Id:        address.Id,
			UnitNo:    address.UnitNo.String,
			Street:    address.Street.String,
			City:      address.City.String,
			State:     address.State.String,
			Country:   address.Country.String,
			ZipCode:   address.ZipCode.String,
			Latitude:  address.Latitude.Float64,
			Longitude: address.Longitude.Float64,
		})
	}

	ctx.JSON(http.StatusOK, addresses)
}

func (a *Address) Update(ctx *gin.Context) {
	err := ctx.BindJSON(&a)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	address := models.Address{
		Id:        a.Id,
		UnitNo:    sql.NullString{String: a.UnitNo, Valid: true},
		Street:    sql.NullString{String: a.Street, Valid: true},
		City:      sql.NullString{String: a.City, Valid: true},
		State:     sql.NullString{String: a.State, Valid: true},
		Country:   sql.NullString{String: a.Country, Valid: true},
		ZipCode:   sql.NullString{String: a.ZipCode, Valid: true},
		Latitude:  sql.NullFloat64{Float64: a.Latitude, Valid: true},
		Longitude: sql.NullFloat64{Float64: a.Longitude, Valid: true},
	}
	address, err = address.Update()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, Address{
		Id:        address.Id,
		UnitNo:    address.UnitNo.String,
		Street:    address.Street.String,
		City:      address.City.String,
		State:     address.State.String,
		Country:   address.Country.String,
		ZipCode:   address.ZipCode.String,
		Latitude:  address.Latitude.Float64,
		Longitude: address.Longitude.Float64,
	})
}

func (Address) Delete(ctx *gin.Context) {
	idAddress, err := uuid.Parse(ctx.Param("id"))
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	address := models.Address{
		Id: idAddress,
	}
	err = address.Delete()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, Address{})
}
