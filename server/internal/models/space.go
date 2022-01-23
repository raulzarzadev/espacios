package models

import (
	"spaces/pkg/postgres"

	"github.com/google/uuid"
	"github.com/lib/pq"
)

type Space struct {
	Id             uuid.UUID      `db:"id"`
	IdTeam         uuid.UUID      `db:"id_team"`
	IdSpaceType    uuid.UUID      `db:"id_space_type"`
	IdPropertyType uuid.UUID      `db:"id_property_type"`
	IdAddress      uuid.UUID      `db:"id_address"`
	Name           string         `db:"name"`
	Guests         int            `db:"guests"`
	SafeBoxCode    string         `db:"safe_box_code"`
	Notes          string         `db:"notes"`
	Contract       string         `db:"contract"`
	Pictures       pq.StringArray `db:"pictures"`
	Url            string         `db:"url"`
}

func (s *Space) Create() (Space, error) {
	db := postgres.DB
	statement := "INSERT INTO public.space VALUES (" +
		":id, :id_team, :id_space_type, :id_property_type, :id_address," +
		":name, :guests, :safe_box_code, :notes, :contract, :pictures, :url )"
	_, err := db.Pool.NamedExec(statement, s)
	if err != nil {
		return Space{}, err
	}

	return *s, nil
}
