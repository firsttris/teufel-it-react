import React, { Component } from 'react';
import Paper from './../assets/images/backgrounds/paper.png';
import Lines from './../assets/images/backgrounds/lines.png';
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
            <FullImage image={this.props.image1} height="550px"></FullImage>
          </div>
        </div>

        <div className="row py-3">
          <Header title="[ teufel it ]" subtitle="Software ist unser Handwerk"></Header>
        </div>

        <div className="row py-3">
          <SubHeading title={this.props.portfolioJson.title} text={this.props.portfolioJson.text}></SubHeading>
        </div>

        <div className="row py-3">
          {
            this.props.portfolioJson.cards.map((card, index) => {
              return <FlipCard key={index} class={card.gridClass} icon={card.iconClass} title={card.title} text={card.text}></FlipCard>
            })
          }
        </div>

        <div className="row">
          <div className="col" style={removePaddingStyle}>
            <FullImage image={this.props.image2} height="350px"></FullImage>
          </div>
        </div>

        <div className="row py-3" style={blackBackgroundStyle}>
          <SubHeading title={this.props.principlesJson.title} text={this.props.principlesJson.text}></SubHeading>
        </div>

        <div className="row py-3" style={blackBackgroundStyle}>
         {
            this.props.principlesJson.cards.map((card, index) => {
              return <FadeCard key={index} icon={card.iconClass} title={card.title} text={card.text}></FadeCard>
            })
          }
        </div>

        <div className="row">
          <div className="col" style={removePaddingStyle}>
            <FullImage image={this.props.image3} height="350px"></FullImage>
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
