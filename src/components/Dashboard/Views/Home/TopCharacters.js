import React, { Component } from 'react';
import { HeroChart, Loading } from 'components/UIComponents';
import { getKda } from 'helpers';

class TopCharacters extends Component {
  componentDidMount() {
    this.props.getTopCharacters();
  };

  render() {
    const { data, loading } = this.props;
    return (
      <div className="sp-tabs sp-tabs-vertical top-characters bg-darkblue3 mb-10">
        <div className="sp-tabs-nav">
          {loading ?
            <Loading className="text-lightpurple" />
            :
            data && data.heros && data.heros.map((x) => (
              <div key={x.hero} className="sp-tabs-nav-item">
                <div className="pr-5">
                  <img src={`/static/img/hero/${x.hero}.png`} alt="" />
                </div>
                <div className="pr-5 pl-5">
                  <div className="text-white text-bold">{x.hero.capitalize()}</div>
                  <div className="text-normal">{x.cs} ({x.csAvg})</div>
                </div>
                <div className="pr-5 pl-5">
                  <div className="text-yellow text-bold">{getKda(x)} KDA</div>
                  <div className="text-normal">{`${x.kills} / ${x.deaths} / ${x.assists}`}</div>
                </div>
                <div className="pl-5">
                  <div className="text-yellow text-bold">{x.winRate}%</div>
                  <div className="text-normal">{x.games} Games</div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="sp-tabs-content">
          <HeroChart data={data ? data.stats : []} />
        </div>
      </div>
    );
  };
};

export default TopCharacters;