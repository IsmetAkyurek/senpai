import React, { Component } from 'react';
import HistoryRow from './HistoryRow';
import Filter from './Filter';
import { Loading } from 'components/UIComponents';

class MatchHistory extends Component {
  state = {
    filter: { sortBy: 'date', result: [], type: [], kda: null, duration: null }
  };

  componentDidMount() {
    this.props.getMatchHistory(this.state.filter);
  };

  onChange = (key, value) => {
    let { filter } = this.state;
    filter[key] = value;
    this.setState({ filter });
  };

  onFilter = () => {
    this.props.getMatchHistory(this.state.filter);
  };

  render() {
    const { data, loading } = this.props;
    const { filter } = this.state;
    return (
      <div className="match-history">
        <div className="match-history-title">
          Match History
          <Filter filter={filter} onChange={this.onChange} onFilter={this.onFilter} />
        </div>
        <div className="match-history-body">
          {loading ?
            <Loading className="text-lightpurple" />
            :
            data && data.map(x => (
              <HistoryRow key={x.id} data={x} />
            ))
          }
        </div>
      </div>
    );
  };
};

export default MatchHistory;