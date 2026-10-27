import React from 'react';
import {ArrowUpRight} from 'lucide-react';
import {homeContent} from '../content';
import {images, properties} from '../data';
import {Photo, Link, ButtonLink, Eyebrow, Reveal, SectionTitle, DemoNote} from './ui';
import {DestinationCards, ServiceCards, Method, Partners} from './marketing';
import {PropertyGrid} from './property';
import {HeroMedia} from './HeroMedia';

export function HomeLayout({children}) {
  const {hero, agency, destinations, services, selection} = homeContent;
  return <>
    <section className="home-hero" aria-labelledby="home-title">
      <HeroMedia/>
      <div className="hero-shade"/>
      <div className="hero-editorial">
        <p className="hero-kicker"><span/>{hero.eyebrow}</p>
        <h1 id="home-title">{hero.title}<br/><em>{hero.emphasis}</em></h1>
        <p className="hero-description">{hero.description}</p>
        <div className="hero-actions">
          <ButtonLink to="/destinations" light>{hero.action}</ButtonLink>
          <Link to="/contact" className="hero-secondary">{hero.contactAction} <ArrowUpRight size={17}/></Link>
        </div>
      </div>
    </section>

    <section className="section intro-section" id="destinations-home">
      <SectionTitle {...destinations} italic={destinations.emphasis}/>
      <DestinationCards/>
    </section>

    <section className="about-split home-agency" id="agence-home" aria-labelledby="agency-home-title">
      <div className="about-image"><Photo src={images.interior} alt="Inspiration de riad aux matières naturelles et à la lumière douce"/></div>
      <Reveal className="about-copy">
        <Eyebrow>{agency.eyebrow}</Eyebrow>
        <h2 id="agency-home-title">{agency.title}<br/><em>{agency.emphasis}</em></h2>
        {agency.paragraphs.map(text => <p key={text}>{text}</p>)}
        <Link to="/agence" className="text-link">{agency.action}<ArrowUpRight size={18}/></Link>
      </Reveal>
    </section>

    <section className="section home-services" id="services-home">
      <SectionTitle {...services} italic={services.emphasis}/>
      <ServiceCards/>
    </section>

    <section className="section selection-section" id="selection-home">
      <SectionTitle {...selection} italic={selection.emphasis} action={<Link to="/destinations" className="text-link">Voir les catalogues <ArrowUpRight size={17}/></Link>}/>
      <PropertyGrid items={properties.filter(property => property.featured).slice(0, 6)}/>
      <DemoNote/>
    </section>
    <Method/>
    <Partners/>
    {children}
  </>;
}
