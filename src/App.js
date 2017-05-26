import React, { Component } from 'react';
import MuchCode from './assets/images/much_code.jpg';
import CodeColor from './assets/images/code_color.jpg';
import Paper from './assets/images/backgrounds/paper.png';
import Lines from './assets/images/backgrounds/lines.png';
import Header from './Header';
import FullImage from './FullImage'
import SubHeading from './SubHeading'
import FlipCard from './FlipCard'
import FadeCard from './FadeCard'
import Contact from './Contact'
import Social from './Social'
import Impressum from './Impressum'

const blackBackgroundStyle = { backgroundImage: `url(${Paper})`, color: 'white' };
const removePaddingStyle = { padding: 0 };

class App extends Component {
  render() {
    return (
      <div className="container-fluid" style={{
        textAlign: 'center',
        backgroundImage: `url(${Lines})`
      }}>
        <div className="row">
          <div className="col" style={removePaddingStyle}>
            <FullImage image={MuchCode}></FullImage>
          </div>
        </div>

        <div className="row py-3">
          <Header title="[ teufel it ]" subtitle="Software ist unser Handwerk"></Header>
        </div>

        <div className="row py-3">
          <SubHeading title="Portfolio" text="Wir sind zuverlässiger Partner bei"></SubHeading>
        </div>

        <div className="row py-3">
          <FlipCard icon="fa-github" title="software" text="Entwicklung von Nativen-, Web- und Cross-Platform Anwendungen."></FlipCard>
          <FlipCard icon="fa-mobile" title="mobile" text="Mobile Entwicklung für iOS und Android."></FlipCard>
          <FlipCard icon="fa-code-fork" title="services" text="Integration und Migration von Business Services."></FlipCard>
          <FlipCard icon="fa-graduation-cap" title="training" text="Wir teilen unser Wissen, neue Konzepte und Methoden."></FlipCard>
        </div>

        <div className="row">
          <div className="col" style={removePaddingStyle}>
            <FullImage image={CodeColor}></FullImage>
          </div>
        </div>

        <div className="row py-3" style={blackBackgroundStyle}>
          <SubHeading title="Prinzipien" text="Wir arbeiten auf Basis von bewährten Konzepten"></SubHeading>
        </div>

        <div className="row py-3" style={blackBackgroundStyle}>
          <FadeCard icon="fa-free-code-camp" title="TDD" text="Wir testen schon ab der ersten Zeile"></FadeCard>
          <FadeCard icon="fa-free-code-camp" title="TDD" text="Wir testen schon ab der ersten Zeile"></FadeCard>
          <FadeCard icon="fa-free-code-camp" title="TDD" text="Wir testen schon ab der ersten Zeile"></FadeCard>
          <FadeCard icon="fa-free-code-camp" title="TDD" text="Wir testen schon ab der ersten Zeile"></FadeCard>
        </div>

        <div className="row">
          <div className="col" style={removePaddingStyle}>
            <FullImage image={MuchCode}></FullImage>
          </div>
        </div>

        <div className="row pt-3">
          <SubHeading title="Kontakt" text="Kontaktieren Sie mich über"></SubHeading>
        </div>

        <div className="row">
          <div className="col" style={{ margin: '0 auto' }}>
            <Social icon="fa-xing-square" url="https://www.xing.com/profile/Tristan_Teufel"></Social>
            <Social icon="fa-linkedin-square" url="https://de.linkedin.com/pub/tristan-teufel/8a/30a/b5"></Social>
            <Social icon="fa-github" url="https://github.com/firsttris"></Social>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col" style={{ margin: '0 auto' }}>
            <Contact info="+49 176 45744166" tel={true}></Contact>
            <Contact info="info@teufel-it.de" tel={false} ></Contact>
          </div>
        </div>

        <Impressum></Impressum>
      </div>
    );
  }
}

export default App;
