-- Portfolio Database Schema Setup
-- Run this script in your Supabase SQL Editor to set up the database

-- Create experiences table
CREATE TABLE IF NOT EXISTS experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_it text NOT NULL,
  title_en text NOT NULL,
  company text NOT NULL,
  period_start date NOT NULL,
  period_end date,
  description_it text NOT NULL DEFAULT '',
  description_en text NOT NULL DEFAULT '',
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view experiences"
  ON experiences FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert experiences"
  ON experiences FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update experiences"
  ON experiences FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete experiences"
  ON experiences FOR DELETE
  TO authenticated
  USING (true);

-- Create education table
CREATE TABLE IF NOT EXISTS education (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_it text NOT NULL,
  title_en text NOT NULL,
  institution text NOT NULL,
  period_start date NOT NULL,
  period_end date,
  description_it text NOT NULL DEFAULT '',
  description_en text NOT NULL DEFAULT '',
  type text NOT NULL DEFAULT 'degree',
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE education ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view education"
  ON education FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert education"
  ON education FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update education"
  ON education FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete education"
  ON education FOR DELETE
  TO authenticated
  USING (true);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description_it text NOT NULL DEFAULT '',
  description_en text NOT NULL DEFAULT '',
  icon text NOT NULL DEFAULT 'code',
  category text NOT NULL DEFAULT 'general',
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view skills"
  ON skills FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert skills"
  ON skills FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update skills"
  ON skills FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete skills"
  ON skills FOR DELETE
  TO authenticated
  USING (true);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description_it text NOT NULL,
  description_en text NOT NULL,
  technologies text[] NOT NULL DEFAULT '{}',
  live_url text,
  image_url text,
  featured boolean DEFAULT false,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

-- Create cv_documents table
CREATE TABLE IF NOT EXISTS cv_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  file_path text NOT NULL,
  file_name text NOT NULL,
  language text NOT NULL DEFAULT 'it',
  is_active boolean DEFAULT true,
  uploaded_at timestamptz DEFAULT now()
);

ALTER TABLE cv_documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active CVs"
  ON cv_documents FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert CVs"
  ON cv_documents FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update CVs"
  ON cv_documents FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete CVs"
  ON cv_documents FOR DELETE
  TO authenticated
  USING (true);

-- Create site_config table
CREATE TABLE IF NOT EXISTS site_config (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value_it text NOT NULL DEFAULT '',
  value_en text NOT NULL DEFAULT '',
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE site_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view site config"
  ON site_config FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert site config"
  ON site_config FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update site config"
  ON site_config FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete site config"
  ON site_config FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS experiences_order_idx ON experiences(order_index);
CREATE INDEX IF NOT EXISTS education_order_idx ON education(order_index);
CREATE INDEX IF NOT EXISTS skills_order_idx ON skills(order_index);
CREATE INDEX IF NOT EXISTS projects_order_idx ON projects(order_index);
CREATE INDEX IF NOT EXISTS projects_featured_idx ON projects(featured);
CREATE INDEX IF NOT EXISTS cv_documents_active_idx ON cv_documents(is_active);

-- Insert sample data for skills (you can customize these)
INSERT INTO skills (name, description_it, description_en, icon, category, order_index)
VALUES
  ('React', 'Sviluppo di applicazioni web moderne con React', 'Building modern web applications with React', 'Component', 'frontend', 0),
  ('Angular', 'Framework enterprise per applicazioni scalabili', 'Enterprise framework for scalable applications', 'Code', 'frontend', 1),
  ('Progressive Web Apps', 'Creazione di PWA performanti e offline-first', 'Creating performant offline-first PWAs', 'Smartphone', 'frontend', 2),
  ('AWS', 'Cloud computing e servizi AWS', 'Cloud computing and AWS services', 'Cloud', 'cloud', 3),
  ('DevOps', 'CI/CD, automazione e deployment', 'CI/CD, automation and deployment', 'Settings', 'devops', 4),
  ('TypeScript', 'JavaScript tipizzato per applicazioni robuste', 'Typed JavaScript for robust applications', 'FileCode', 'frontend', 5)
ON CONFLICT DO NOTHING;
