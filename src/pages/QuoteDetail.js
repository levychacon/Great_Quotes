import { useParams } from "react-router-dom";
import {Route} from 'react-router-dom'
import Comments from '../components/comments/Comments'

const QuoteDetail = () => {
  const params = useParams();

  return (
    <div>
      <h1>Quote detail page</h1>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </div>
  );
};

export default QuoteDetail;
