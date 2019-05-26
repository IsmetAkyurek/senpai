import React, { Component } from 'react';
import { Icon } from 'components/UIComponents';

class Summary extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="summary-card mb-10 full-height">
        <img className="bg" src={`/static/img/bg/${data.character}.png`} alt="" />
        <img className="tier" src={`/static/img/tier/${data.tier}.png`} alt="" />
        <Icon className="card-btn top" type="move" />
        <Icon className="card-btn bottom" type="resize" />
        <div className="card-left">
          <img className="hero" src={`/static/img/hero/${data.character}.png`} alt="" />
          <Icon className="hero-btn text-blue" type="refresh" />
          <Icon className="hero-btn text-yellow" type="favorite" />
          <h5 className="text-lightbrown mt-10 mb-0">Updated {data.updated}</h5>
        </div>
        <div className="card-right pt-20">
          <h1 className="text-white">{data.username}</h1>
          <h2 className="text-lightbrown2 mb-40">Rank {data.rank} ({data.position}% of top)</h2>
          <h3 className="text-lightbrown">{data.queue}</h3>
          <h1 className="text-orange">{data.tier.capitalize()}</h1>
          <h3 className="text-lightbrown2 mb-20">{data.lp}LP / {data.win}W {data.loss}L</h3>
          <div className="info mb-20">
            <div>
              <h4 className="text-lightbrown">Win Rate</h4>
              <h4 className="text-green">{((data.win * 100) / (data.win + data.loss)).toFixed(2)}%</h4>
            </div>
            <div>
              <h4 className="text-lightbrown">Win/Loss</h4>
              <h4 className="text-lightbrown2">{(data.win / data.loss).toFixed(2)}</h4>
            </div>
            <div>
              <h4 className="text-lightbrown">AVG. KDA</h4>
              <h4 className="text-lightbrown2">{data.kdaAvg}</h4>
            </div>
            <div>
              <h4 className="text-lightbrown">CS Per Min</h4>
              <h4 className="text-lightbrown2">{data.csPerMin}</h4>
            </div>
            <div>
              <img src={`/static/img/multikill/${data.multikill}.png`} alt="" />
              <h4 className="text-lightbrown">Highest Multikill</h4>
            </div>
          </div>
          <h4 className="text-lightbrown">{data.win + data.loss} Matches</h4>
        </div>
      </div>
    );
  };
};

export default Summary;