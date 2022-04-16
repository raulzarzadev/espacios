package models

import (
	"database/sql"
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
	Name           sql.NullString `db:"name"`
	Guests         sql.NullInt16  `db:"guests"`
	SafeBoxCode    sql.NullString `db:"safe_box_code"`
	Notes          sql.NullString `db:"notes"`
	Contract       sql.NullString `db:"contract"`
	Pictures       pq.StringArray `db:"pictures"`
	Url            sql.NullString `db:"url"`
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

func (s *Space) Read() (Space, error) {
	db := postgres.DB
	statement := "SELECT * FROM public.space WHERE id=$1"
	row := db.Pool.QueryRowx(statement, s.Id)

	err := row.StructScan(s)
	if err != nil {
		return Space{}, err
	}

	return *s, nil
}

func (Space) ReadAll() ([]Space, error) {
	db := postgres.DB
	statement := "SELECT * FROM public.space"
	rows, err := db.Pool.Queryx(statement)
	if err != nil {
		return []Space{}, err
	}

	spaces := make([]Space, 0)
	for rows.Next() {
		var s Space
		err = rows.StructScan(&s)
		if err != nil {
			return []Space{}, err
		}

		spaces = append(spaces, s)
	}

	return spaces, nil
}

func (s *Space) Update() (Space, error) {
	db := postgres.DB
	statement := "UPDATE public.space SET " +
		"id_team=:id_team, id_space_type=:id_space_type," +
		"id_property_type=:id_property_type, id_address=:id_address," +
		"name=:name, guests=:guests, safe_box_code=:safe_box_code, notes=:notes," +
		"contract=:contract, pictures=:pictures, url=:url WHERE id=:id"
	_, err := db.Pool.NamedExec(statement, s)
	if err != nil {
		return Space{}, err
	}

	return *s, nil
}

func (s *Space) Delete() error {
	db := postgres.DB
	statement := "DELETE FROM public.space WHERE id=:id"
	_, err := db.Pool.NamedExec(statement, s)
	if err != nil {
		return err
	}

	return nil
}
