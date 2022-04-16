package models

import (
	"database/sql"
	"spaces/pkg/postgres"

	"github.com/google/uuid"
)

type Address struct {
	Id        uuid.UUID       `db:"id"`
	UnitNo    sql.NullString  `db:"unit_no"`
	Street    sql.NullString  `db:"street"`
	City      sql.NullString  `db:"city"`
	State     sql.NullString  `db:"state"`
	Country   sql.NullString  `db:"country"`
	ZipCode   sql.NullString  `db:"zip_code"`
	Latitude  sql.NullFloat64 `db:"latitude"`
	Longitude sql.NullFloat64 `db:"longitude"`
}

func (s *Address) Create() (Address, error) {
	db := postgres.DB
	statement := "INSERT INTO public.address VALUES (" +
		":id, :unit_no, :street, :city, :state," +
		":country, :zip_code, :latitude, :longitude)"
	_, err := db.Pool.NamedExec(statement, s)
	if err != nil {
		return Address{}, err
	}

	return *s, nil
}

func (s *Address) Read() (Address, error) {
	db := postgres.DB
	statement := "SELECT * FROM public.address WHERE id=$1"
	row := db.Pool.QueryRowx(statement, s.Id)

	err := row.StructScan(s)
	if err != nil {
		return Address{}, err
	}

	return *s, nil
}

func (Address) ReadAll() ([]Address, error) {
	db := postgres.DB
	statement := "SELECT * FROM public.address"
	rows, err := db.Pool.Queryx(statement)
	if err != nil {
		return []Address{}, err
	}

	addresss := make([]Address, 0)
	for rows.Next() {
		var s Address
		err = rows.StructScan(&s)
		if err != nil {
			return []Address{}, err
		}

		addresss = append(addresss, s)
	}

	return addresss, nil
}

func (s *Address) Update() (Address, error) {
	db := postgres.DB
	statement := "UPDATE public.address SET " +
		"unit_no=:unit_no, street=:street, " +
		"city=:city, state=:state," +
		"country=:country, zip_code=:zip_code, latitude=:latitude, longitude=:longitude " +
		"WHERE id=:id"
	_, err := db.Pool.NamedExec(statement, s)
	if err != nil {
		return Address{}, err
	}

	return *s, nil
}

func (s *Address) Delete() error {
	db := postgres.DB
	statement := "DELETE FROM public.address WHERE id=:id"
	_, err := db.Pool.NamedExec(statement, s)
	if err != nil {
		return err
	}

	return nil
}
