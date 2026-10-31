import {tr} from '../i18n/index.js';
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
        <p className="hero-kicker"><span/>{tr(hero.eyebrow)}</p>
        <h1 id="home-title">{tr(hero.title)}<br/><em>{tr(hero.emphasis)}</em></h1>
        <p className="hero-description">{tr(hero.description)}</p>
        <div className="hero-actions">
          <ButtonLink to="/destinations" light>{tr(hero.action)}</ButtonLink>
          <Link to="/contact" className="hero-secondary">{tr(hero.contactAction)} <ArrowUpRight size={17}/></Link>
        </div>
      </div>
    </section>

    <section className="section intro-section" id="destinations-home">
      <SectionTitle {...destinations} italic={tr(destinations.emphasis)}/>
      <DestinationCards/>
    </section>

    <section className="about-split home-agency" id="agence-home" aria-labelledby="agency-home-title">
      <div className="about-image"><Photo src={images.interior} alt={tr("Inspiration de riad aux matières naturelles et à la lumière douce")}/></div>
      <Reveal className="about-copy">
        <Eyebrow>{tr(agency.eyebrow)}</Eyebrow>
        <h2 id="agency-home-title">{tr(agency.title)}<br/><em>{tr(agency.emphasis)}</em></h2>
        {tr(agency.paragraphs.map(text => <p key={text}>{tr(text)}</p>))}
        <Link to="/agence" className="text-link">{tr(agency.action)}<ArrowUpRight size={18}/></Link>
      </Reveal>
    </section>

    <section className="section home-services" id="services-home">
      <SectionTitle {...services} italic={tr(services.emphasis)}/>
      <ServiceCards/>
    </section>

    <section className="section selection-section" id="selection-home">
      <SectionTitle {...selection} italic={tr(selection.emphasis)} action={<Link to="/destinations" className="text-link">{tr("Voir les catalogues ")}<ArrowUpRight size={17}/></Link>}/>
      <PropertyGrid items={properties.filter(property => property.featured).slice(0, 6)}/>
      <DemoNote/>
    </section>
    <Method/>
    <Partners/>
    {tr(children)}
  </>;
}
