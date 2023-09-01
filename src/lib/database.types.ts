export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      blogs: {
        Row: {
          created_at: string;
          id: string;
          owner: string | null;
          text: string;
          title: string;
        };
        Insert: {
          created_at?: string;
          id?: string | number;
          owner?: string | null;
          text: string;
          title: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          owner?: string | null;
          text?: string;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'blogs_owner_fkey';
            columns: ['owner'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      comments: {
        Row: {
          author_id: string | null;
          blog_id: string | null;
          created_at: string;
          id: string;
          text: string | null;
        };
        Insert: {
          author_id?: string | null;
          blog_id?: string | null;
          created_at?: string;
          id?: string;
          text?: string | null;
        };
        Update: {
          author_id?: string | null;
          blog_id?: string | null;
          created_at?: string;
          id?: string;
          text?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'comments_author_id_fkey';
            columns: ['author_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'comments_blog_id_fkey';
            columns: ['blog_id'];
            referencedRelation: 'blogs';
            referencedColumns: ['id'];
          },
        ];
      };
      profiles: {
        Row: {
          email: string | null;
          id: string;
          roles: string | null;
          updated_at: string | null;
          username: string | null;
        };
        Insert: {
          email?: string | null;
          id: string;
          roles?: string | null;
          updated_at?: string | null;
          username?: string | null;
        };
        Update: {
          email?: string | null;
          id?: string;
          roles?: string | null;
          updated_at?: string | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
