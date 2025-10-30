import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a null client if environment variables are missing or dummy values
const isDummyOrMissing = !supabaseUrl || !supabaseAnonKey || 
  supabaseUrl.includes('dummy') || supabaseAnonKey === 'dummy_key';

export const supabase = isDummyOrMissing 
  ? null 
  : createClient(supabaseUrl, supabaseAnonKey);

export type Experience = {
  id: string;
  title_it: string;
  title_en: string;
  company: string;
  period_start: string;
  period_end: string | null;
  description_it: string;
  description_en: string;
  order_index: number;
  created_at: string;
  updated_at: string;
};

export type Education = {
  id: string;
  title_it: string;
  title_en: string;
  institution: string;
  period_start: string;
  period_end: string | null;
  description_it: string;
  description_en: string;
  type: 'degree' | 'certification';
  order_index: number;
  created_at: string;
  updated_at: string;
};

export type Skill = {
  id: string;
  name: string;
  description_it: string;
  description_en: string;
  icon: string;
  category: string;
  order_index: number;
  created_at: string;
};

export type Project = {
  id: string;
  title: string;
  description_it: string;
  description_en: string;
  technologies: string[];
  live_url: string | null;
  image_url: string | null;
  featured: boolean;
  is_private: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
};

export type CVDocument = {
  id: string;
  file_path: string;
  file_name: string;
  language: 'it' | 'en';
  is_active: boolean;
  uploaded_at: string;
};
