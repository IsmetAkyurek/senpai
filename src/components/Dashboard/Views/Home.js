import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'store/actions/global';
import { Summary, Statistics, TopCharacters } from './Home/';
import { InfoCard, HistoryCard } from 'components/UIComponents/Cards';

class Home extends Component {
  render() {
    const { matchHistory, statistics, topCharacters, getMatchHistory, getStatistics, getTopCharacters, user } = this.props;
    return (
      <div className="home-content">
        <div className="d-flex full-width full-height">
          <div className="d-flex d-flex-col half-width full-height mr-10">
            <Summary {...{ ...user }} />
            <TopCharacters {...{ ...topCharacters, getTopCharacters }} />
            <Statistics {...{ ...statistics, getStatistics }} />
          </div>
          <div className="half-width full-height">
            <HistoryCard {...{ ...matchHistory, getMatchHistory }} />
          </div>
        </div>
        <InfoCard />
      </div>
    );
  };
};

const mapStateToProps = ({ global, auth }) => ({
  matchHistory: global.matchHistory,
  statistics: global.statistics,
  topCharacters: global.topCharacters,
  user: auth.user
});
const mapDispatchToProps = (dispatch) => ({
  getMatchHistory: (filter) => dispatch(actions.getDatas({ url: 'match-history', key: 'matchHistory', filter })),
  getStatistics: () => dispatch(actions.getDatas({ url: 'statistics', key: 'statistics' })),
  getTopCharacters: () => dispatch(actions.getDatas({ url: 'top-characters', key: 'topCharacters' })),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);