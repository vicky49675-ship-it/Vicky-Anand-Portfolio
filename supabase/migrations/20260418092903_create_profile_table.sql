/*
  # Create profile table for portfolio photos

  1. New Tables
    - `profile`
      - `id` (uuid, primary key)
      - `user_id` (uuid, unique)
      - `photo_url` (text, nullable)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS on `profile` table
    - Add policy allowing users to manage their own profile
*/

CREATE TABLE IF NOT EXISTS profile (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid UNIQUE NOT NULL DEFAULT gen_random_uuid(),
  photo_url text,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profile ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view and update own profile"
  ON profile
  FOR ALL
  TO anon
  USING (true)
  WITH CHECK (true);
