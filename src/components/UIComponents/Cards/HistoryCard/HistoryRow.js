import React, { Component } from 'react';

class HistoryRow extends Component {
  render() {
    const { data } = this.props;
    let kda = (data.kills + data.assists) / data.deaths;

    return (
      <div className={`history-row ${data.isVictory ? 'is-victory' : 'is-defeat'}`}>
        <div className={`victory-text ${data.isVictory ? 'text-green' : 'text-red'}`}>
          {data.isVictory ? 'Victory' : 'Defeat'}
        </div>
        <div className="history-content">
          <div style={{ width: '100px' }}>
            <div>{data.queue}</div>
            <div className="text-normal text-lightbrown">{data.time}</div>
            <div className="text-normal text-lightbrown2">{data.length}</div>
          </div>
          <div style={{ width: '90px' }}>
            <img className="hero-img" src={`/static/img/hero/${data.hero}.png`} alt="" />
            <div className="summoner-spells">
              {data.summonerSpells.map(x => (
                <img key={x} src={`/static/img/spells/${x}.png`} alt="" />
              ))}
            </div>
          </div>
          <div style={{ width: '90px' }}>
            <div className="text-normal">{data.kills} / {data.deaths} / {data.assists}</div>
            <div className="text-normal text-bold text-lightbrown2">{kda === Infinity ? 'Perfect' : `${kda}:1`} KDA</div>
          </div>
          <div style={{ width: '60px' }}>
            <div className="text-normal text-lightbrown">Level {data.level}</div>
            <div className="text-large text-bold">{data.cs} CS</div>
            <div className="text-normal text-lightbrown">{data.kp}% KP</div>
          </div>
          <div style={{ width: '100px' }}>
            <div className="inventory">
              {data.build.map(x => (
                <img key={x} src={`/static/img/items/${x || 'empty'}.png`} alt="" />
              ))}
              <img src="/static/img/items/shop.png" alt="" />
            </div>
          </div>
          <div>
            <div className="teams">
              <table>
                <tbody>
                  {[...Array(5)].map((x, i) => (
                    <tr key={i}>
                      <td className="text-right">{data.team[i].name}</td>
                      <td>{<img src={`/static/img/hero/${data.team[i].character}.png`} alt="" />}</td>
                      <td>{<img src={`/static/img/hero/${data.enemy[i].character}.png`} alt="w" />}</td>
                      <td>{data.enemy[i].name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ width: '60px' }}>
            <div className="text-green">Analysis</div>
            <div className="text-yellow">Details</div>
          </div>
        </div>
      </div>
    );
  };
};

export default HistoryRow;