import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Loading } from 'components/UIComponents';
import { getKda } from 'helpers';

class Statistics extends Component {
  state = { current: 'normal' };
  componentDidMount() {
    this.props.getStatistics();
  };

  render() {
    const { current } = this.state;
    const { data, loading } = this.props;
    const selected = data ? data[current] : null;

    return (
      <div className="sp-tabs sp-tabs-vertical bg-darkblue3 mb-10">
        <div className="sp-tabs-nav">
          <div className={`sp-tabs-nav-item ${current === 'normal' ? 'is-active' : ''}`} onClick={() => this.setState({ current: 'normal' })}>
            Normal
          </div>
          <div className={`sp-tabs-nav-item ${current === 'singleduo' ? 'is-active' : ''}`} onClick={() => this.setState({ current: 'singleduo' })}>
            Single / Duo
          </div>
          <div className={`sp-tabs-nav-item ${current === 'flex' ? 'is-active' : ''}`} onClick={() => this.setState({ current: 'flex' })}>
            Flex
          </div>
          <div className={`sp-tabs-nav-item ${current === 'all' ? 'is-active' : ''}`} onClick={() => this.setState({ current: 'all' })}>
            All
          </div>
        </div>
        <div className="sp-tabs-content">
          {loading ?
            <Loading className="text-lightpurple" />
            :
            selected &&
            <>
              <div className="progress">
                <CircularProgressbar className="progress-games" value={100} text={selected.games} />
                <div className="text-center">Played Games</div>
              </div>
              <div className="text-center ml-40 mr-40">
                <h2 className="mb-20">{selected.t}T {selected.g}G {selected.y}Y</h2>
                <div className="text-big text-bold">
                  <span className="text-yellow">{selected.kills}</span> / <span className="text-red">{selected.deaths}</span> / <span className="text-green">{selected.assists}</span>
                </div>
                <h2>{getKda(selected)}</h2>
              </div>
              <div className="progress">
                <CircularProgressbar className="progress-wins" value={selected.wins * 100 / selected.games} text={`${(selected.wins * 100 / selected.games).toFixed(1)}%`} />
                <div className="text-center">Success Rate</div>
              </div>
            </>
          }
        </div>
      </div>
    );
  };
};

export default Statistics;