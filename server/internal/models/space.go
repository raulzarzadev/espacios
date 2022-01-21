package models

import (
	"spaces/pkg/postgres"

	"github.com/google/uuid"
	"github.com/lib/pq"
)

type Space struct {
	Id             uuid.UUID `json:"id" db:"id"`
	IdTeam         uuid.UUID `json:"id_team" db:"id_team"`
	IdSpaceType    uuid.UUID `json:"id_space_type" db:"id_space_type"`
	IdPropertyType uuid.UUID `json:"id_property_type" db:"id_property_type"`
	IdAddress      uuid.UUID `json:"id_address" db:"id_address"`
	Name           string    `json:"name" db:"name"`
	Guests         int       `json:"guests" db:"guests"`
	SafeBoxCode    string    `json:"safe_box_code" db:"safe_box_code"`
	Notes          string    `json:"notes" db:"notes"`
	Contract       string    `json:"contract" db:"contract"`
	Pictures       []string  `json:"pictures" db:"pictures"`
	Url            string    `json:"url" db:"url"`
}

func (s *Space) Create() (Space, error) {
	s.Id = uuid.New()

	db := postgres.DB
	tx, err := db.Pool.Beginx()
	if err != nil {
		tx.Rollback()
		return Space{}, err
	}

	statement := "INSERT INTO public.space (" +
		"id, id_team, id_space_type, id_property_type, id_address," +
		"name, guests, safe_box_code, notes, contract, url )" +
		"VALUES (" +
		":id, :id_team, :id_space_type, :id_property_type, :id_address," +
		":name, :guests, :safe_box_code, :notes, :contract, :url )"
	_, err = tx.NamedExec(statement, s)
	if err != nil {
		tx.Rollback()
		return Space{}, err
	}

	statement = "UPDATE public.space SET pictures = $1 WHERE id = $2"
	_, err = tx.Exec(statement, pq.Array(s.Pictures), s.Id)
	if err != nil {
		tx.Rollback()
		return Space{}, err
	}

	tx.Commit()

	return *s, nil
}
