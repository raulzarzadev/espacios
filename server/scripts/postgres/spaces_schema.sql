-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler  version: 0.9.4-alpha
-- PostgreSQL version: 13.0
-- Project Site: pgmodeler.io
-- Model Author: ---

-- Database creation must be performed outside a multi lined SQL file. 
-- These commands were put in this file only as a convenience.
-- 
-- object: spaces | type: DATABASE --
-- DROP DATABASE IF EXISTS spaces;
-- CREATE DATABASE spaces
--	ENCODING = 'UTF8';
-- ddl-end --


-- object: public.space | type: TABLE --
-- DROP TABLE IF EXISTS public.space CASCADE;
CREATE TABLE public.space (
	id uuid NOT NULL,
	id_team uuid NOT NULL,
	id_space_type uuid NOT NULL,
	id_property_type uuid NOT NULL,
	id_address uuid NOT NULL,
	name text,
	guests smallint,
	safe_box_code text,
	notes text,
	contract text,
	pictures text[],
	url text,
	CONSTRAINT space_pk PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.space OWNER TO postgres;
-- ddl-end --

-- object: public.service_type | type: TABLE --
-- DROP TABLE IF EXISTS public.service_type CASCADE;
CREATE TABLE public.service_type (
	id uuid NOT NULL,
	name text,
	CONSTRAINT service_pk PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.service_type OWNER TO postgres;
-- ddl-end --

-- object: public.area_type | type: TABLE --
-- DROP TABLE IF EXISTS public.area_type CASCADE;
CREATE TABLE public.area_type (
	id uuid NOT NULL,
	name text,
	CONSTRAINT area_pk PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.area_type OWNER TO postgres;
-- ddl-end --

-- object: public.space_service | type: TABLE --
-- DROP TABLE IF EXISTS public.space_service CASCADE;
CREATE TABLE public.space_service (
	id_space uuid NOT NULL,
	id_service_type uuid NOT NULL,
	company text,
	contract text,
	reference_no text,
	support_phone text,
	notes text,
	CONSTRAINT space_service_pk PRIMARY KEY (id_space,id_service_type)

);
-- ddl-end --

-- object: space_fk | type: CONSTRAINT --
-- ALTER TABLE public.space_service DROP CONSTRAINT IF EXISTS space_fk CASCADE;
ALTER TABLE public.space_service ADD CONSTRAINT space_fk FOREIGN KEY (id_space)
REFERENCES public.space (id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: service_type_fk | type: CONSTRAINT --
-- ALTER TABLE public.space_service DROP CONSTRAINT IF EXISTS service_type_fk CASCADE;
ALTER TABLE public.space_service ADD CONSTRAINT service_type_fk FOREIGN KEY (id_service_type)
REFERENCES public.service_type (id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: public.space_area | type: TABLE --
-- DROP TABLE IF EXISTS public.space_area CASCADE;
CREATE TABLE public.space_area (
	id_space uuid NOT NULL,
	id_area_type uuid NOT NULL,
	number smallint,
	CONSTRAINT space_area_pk PRIMARY KEY (id_space,id_area_type)

);
-- ddl-end --

-- object: space_fk | type: CONSTRAINT --
-- ALTER TABLE public.space_area DROP CONSTRAINT IF EXISTS space_fk CASCADE;
ALTER TABLE public.space_area ADD CONSTRAINT space_fk FOREIGN KEY (id_space)
REFERENCES public.space (id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: area_type_fk | type: CONSTRAINT --
-- ALTER TABLE public.space_area DROP CONSTRAINT IF EXISTS area_type_fk CASCADE;
ALTER TABLE public.space_area ADD CONSTRAINT area_type_fk FOREIGN KEY (id_area_type)
REFERENCES public.area_type (id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: public.space_type | type: TABLE --
-- DROP TABLE IF EXISTS public.space_type CASCADE;
CREATE TABLE public.space_type (
	id uuid NOT NULL,
	name text,
	CONSTRAINT space_type_pk PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.space_type OWNER TO postgres;
-- ddl-end --

-- object: public.property_type | type: TABLE --
-- DROP TABLE IF EXISTS public.property_type CASCADE;
CREATE TABLE public.property_type (
	id uuid NOT NULL,
	name text,
	CONSTRAINT property_type_pk PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.property_type OWNER TO postgres;
-- ddl-end --

-- object: space_type_fk | type: CONSTRAINT --
-- ALTER TABLE public.space DROP CONSTRAINT IF EXISTS space_type_fk CASCADE;
ALTER TABLE public.space ADD CONSTRAINT space_type_fk FOREIGN KEY (id_space_type)
REFERENCES public.space_type (id) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --

-- object: property_type_fk | type: CONSTRAINT --
-- ALTER TABLE public.space DROP CONSTRAINT IF EXISTS property_type_fk CASCADE;
ALTER TABLE public.space ADD CONSTRAINT property_type_fk FOREIGN KEY (id_property_type)
REFERENCES public.property_type (id) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --

-- object: public.address | type: TABLE --
-- DROP TABLE IF EXISTS public.address CASCADE;
CREATE TABLE public.address (
	id uuid NOT NULL,
	unit_no text,
	street text,
	city text,
	state text,
	country text,
	zip_code text,
	latitude float,
	longitude float,
	CONSTRAINT address_pk PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.address OWNER TO postgres;
-- ddl-end --

-- object: address_fk | type: CONSTRAINT --
-- ALTER TABLE public.space DROP CONSTRAINT IF EXISTS address_fk CASCADE;
ALTER TABLE public.space ADD CONSTRAINT address_fk FOREIGN KEY (id_address)
REFERENCES public.address (id) MATCH FULL
ON DELETE SET NULL ON UPDATE CASCADE;
-- ddl-end --

-- object: space_uq | type: CONSTRAINT --
-- ALTER TABLE public.space DROP CONSTRAINT IF EXISTS space_uq CASCADE;
ALTER TABLE public.space ADD CONSTRAINT space_uq UNIQUE (id_address);
-- ddl-end --

-- object: public."user" | type: TABLE --
-- DROP TABLE IF EXISTS public."user" CASCADE;
CREATE TABLE public."user" (
	id uuid NOT NULL,
	name text,
	email text,
	CONSTRAINT user_pk PRIMARY KEY (id),
	CONSTRAINT email_uq UNIQUE (email)

);
-- ddl-end --
ALTER TABLE public."user" OWNER TO postgres;
-- ddl-end --

-- object: public.team | type: TABLE --
-- DROP TABLE IF EXISTS public.team CASCADE;
CREATE TABLE public.team (
	id uuid NOT NULL,
	id_user uuid NOT NULL,
	name text,
	CONSTRAINT team_pk PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.team OWNER TO postgres;
-- ddl-end --

-- object: user_fk | type: CONSTRAINT --
-- ALTER TABLE public.team DROP CONSTRAINT IF EXISTS user_fk CASCADE;
ALTER TABLE public.team ADD CONSTRAINT user_fk FOREIGN KEY (id_user)
REFERENCES public."user" (id) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --

-- object: public.role | type: TABLE --
-- DROP TABLE IF EXISTS public.role CASCADE;
CREATE TABLE public.role (
	id text NOT NULL,
	name text,
	CONSTRAINT role_pk PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.role OWNER TO postgres;
-- ddl-end --

-- object: public.member | type: TABLE --
-- DROP TABLE IF EXISTS public.member CASCADE;
CREATE TABLE public.member (
	id uuid NOT NULL,
	id_user uuid NOT NULL,
	id_team uuid NOT NULL,
	id_role text NOT NULL,
	CONSTRAINT member_pk PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.member OWNER TO postgres;
-- ddl-end --

-- object: user_fk | type: CONSTRAINT --
-- ALTER TABLE public.member DROP CONSTRAINT IF EXISTS user_fk CASCADE;
ALTER TABLE public.member ADD CONSTRAINT user_fk FOREIGN KEY (id_user)
REFERENCES public."user" (id) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --

-- object: team_fk | type: CONSTRAINT --
-- ALTER TABLE public.member DROP CONSTRAINT IF EXISTS team_fk CASCADE;
ALTER TABLE public.member ADD CONSTRAINT team_fk FOREIGN KEY (id_team)
REFERENCES public.team (id) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --

-- object: role_fk | type: CONSTRAINT --
-- ALTER TABLE public.member DROP CONSTRAINT IF EXISTS role_fk CASCADE;
ALTER TABLE public.member ADD CONSTRAINT role_fk FOREIGN KEY (id_role)
REFERENCES public.role (id) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --

-- object: team_fk | type: CONSTRAINT --
-- ALTER TABLE public.space DROP CONSTRAINT IF EXISTS team_fk CASCADE;
ALTER TABLE public.space ADD CONSTRAINT team_fk FOREIGN KEY (id_team)
REFERENCES public.team (id) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --


-- SAMPLE DATA ---
INSERT INTO public."user" VALUES ('fcf938e4-463c-4cb2-86f4-4385b4fe21f7','User', 'user@organization.com');
INSERT INTO public.team VALUES ('4a590474-5b51-4fcb-a444-4ce1889f9033', 'fcf938e4-463c-4cb2-86f4-4385b4fe21f7', 'Admin Team');
INSERT INTO public.space_type VALUES ('3229e908-7ef9-4d75-b864-1bd89b4b4609','A');
INSERT INTO public.property_type VALUES ('1ae0458e-d2cd-40ee-bdfb-80b466244b0f','A');
