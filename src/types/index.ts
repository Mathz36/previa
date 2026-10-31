export interface Profile {
  name: string;
  signatureText?: string;
  avatarUrl: string;
  avatarAlt: string;
  bio: string;
}

export type SocialIconType = 'instagram' | 'tiktok' | 'email' | 'whatsapp' | 'youtube' | 'facebook';

export interface SocialLink {
  id: string;
  platform: SocialIconType;
  label: string;
  url: string;
}

export interface FeaturedPost {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
  url: string;
  date?: string;
}

export type MenuIconType = 'home' | 'whatsapp' | 'instagram' | 'star' | 'plane' | 'camera' | 'book' | 'globe';

export interface MenuItem {
  id: string;
  icon: MenuIconType;
  title: string;
  subtitle: string;
  url: string;
  isExternal?: boolean;
}

export interface SiteFooter {
  copyright: string;
  blogName?: string;
  blogUrl?: string;
}

export interface SiteConfig {
  metaTitle: string;
  metaDescription: string;
  profile: Profile;
  socials: SocialLink[];
  featuredSectionTitle: string;
  featuredPosts: FeaturedPost[];
  menuLinks: MenuItem[];
  footer: SiteFooter;
}

