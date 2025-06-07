import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    description: '';
    displayName: 'cta';
  };
  attributes: {
    body: Schema.Attribute.String;
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    target: Schema.Attribute.String;
  };
}

export interface BlocksCtaImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cta_images';
  info: {
    description: '';
    displayName: 'CTA-Image';
  };
  attributes: {
    cta: Schema.Attribute.Component<'blocks.cta', false>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    description: '';
    displayName: 'HeroSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'blocks.cta', false>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface BlocksMeetTheDev extends Struct.ComponentSchema {
  collectionName: 'components_blocks_meet_the_devs';
  info: {
    description: '';
    displayName: 'MeetTheDev';
  };
  attributes: {
    devName: Schema.Attribute.String;
    devPosition: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksTAndD extends Struct.ComponentSchema {
  collectionName: 'components_blocks_t_and_ds';
  info: {
    displayName: 't&d';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface GlobalFoooter extends Struct.ComponentSchema {
  collectionName: 'components_global_foooters';
  info: {
    description: '';
    displayName: 'Foooter';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    footerNav: Schema.Attribute.Component<'global.navbar', false>;
    links: Schema.Attribute.Component<'blocks.cta-image', true>;
  };
}

export interface GlobalNavbar extends Struct.ComponentSchema {
  collectionName: 'components_global_navbars';
  info: {
    description: '';
    displayName: 'Navbar';
  };
  attributes: {
    links: Schema.Attribute.Component<'blocks.cta', true>;
    logoImage: Schema.Attribute.Media<'images'>;
    logoName: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.cta': BlocksCta;
      'blocks.cta-image': BlocksCtaImage;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.meet-the-dev': BlocksMeetTheDev;
      'blocks.t-and-d': BlocksTAndD;
      'global.foooter': GlobalFoooter;
      'global.navbar': GlobalNavbar;
    }
  }
}
