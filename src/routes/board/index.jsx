import { Switch, Route, withRouter } from 'react-router-dom';

import BoardList from '@pages/Board/BoardList';
import BoardWrite from '@pages/Board/BoardWrite';
import BoardDetail from '@pages/Board/BoardDetail';

const BoardRouter = props => {
  const { match } = props;

  return (
    <Switch>
      <Route path={`${match.url}`} exact component={BoardList} />
      <Route path={`${match.url}/write`} exact component={BoardWrite} />
      <Route path={`${match.url}/:boardId`} exact component={BoardDetail} />
    </Switch>
  )
}

export default withRouter(BoardRouter);
