import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  metaTitle: 'Luis Fernando | Roteiros, Dicas e Experiências no Chile',
  metaDescription: 'Brasileiro no Chile há 12 anos. Experiências, roteiros e o Chile vivido por dentro pra quem vem, passa ou fica.',
  profile: {
    name: 'Luis Fernando',
    signatureText: 'Luis Fernando',
    avatarUrl: '/images/avatar-luis.jpg',
    avatarAlt: 'Foto de perfil Luis Fernando',
    bio: 'Brasileiro no Chile há 12 anos. Experiências, roteiros e o Chile vivido por dentro pra quem vem, passa ou fica.',
  },
  socials: [
    {
      id: 'instagram',
      platform: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/fernandoluiz.oficial/',
    },
    {
      id: 'tiktok',
      platform: 'tiktok',
      label: 'TikTok',
      url: 'https://tiktok.com/@fernandoluiz.oficial',
    },
    {
      id: 'email',
      platform: 'email',
      label: 'E-mail de Contato',
      url: 'mailto:contato@ngturismo.com.br',
    },
  ],
  featuredSectionTitle: 'NO BLOG AGORA',
  featuredPosts: [
    {
      id: 'once-chilena',
      category: 'CULTURA À MESA',
      title: 'O que é a once chilena?',
      imageUrl: '/images/once-chilena.jpg',
      url: 'https://expedicao.ngturismo.com.br/',
    },
    {
      id: 'terremoto-chile',
      category: 'SEGURANÇA E PREVENÇÃO',
      title: 'Terremoto no Chile: o que fazer?',
      imageUrl: '/images/santiago-moneda.jpg',
      url: 'https://expedicao.ngturismo.com.br/',
    },
    {
      id: 'cordilheira-andes',
      category: 'ROTEIROS E PASSEIOS',
      title: 'Cordilheira dos Andes: guia para curtir a neve',
      imageUrl: '/images/andes-chile.jpg',
      url: 'https://expedicao.ngturismo.com.br/',
    },
  ],
  menuLinks: [
    {
      id: 'blog-completo',
      icon: 'home',
      title: 'Blog completo',
      subtitle: 'Todas as matérias sobre o Chile',
      url: 'https://expedicao.ngturismo.com.br/',
      isExternal: true,
    },
    {
      id: 'portfolio-reservas',
      icon: 'whatsapp',
      title: 'Portfólio e Reservas',
      subtitle: 'Reserve seus passeios em Santiago e arredores com a Viajar Chile',
      url: 'https://wa.me/5532998554203?text=Ol%C3%A1%2C%20Luis%20Fernando%21%20Gostaria%20de%20reservar%20um%20passeio',
      isExternal: true,
    },
    {
      id: 'instagram-link',
      icon: 'instagram',
      title: 'Instagram',
      subtitle: 'O dia a dia por aqui',
      url: 'https://www.instagram.com/fernandoluiz.oficial/',
      isExternal: true,
    },
    {
      id: 'seguro-viagem',
      icon: 'star',
      title: 'Seguro Viagem',
      subtitle: 'Faça aqui seu Seguro Viagem',
      url: 'https://mais.app/JAqg3n',
      isExternal: true,
    },
  ],
  footer: {
    copyright: '© 2026 Luis Fernando',
    blogName: 'blog',
    blogUrl: 'https://expedicao.ngturismo.com.br/',
  },
};
