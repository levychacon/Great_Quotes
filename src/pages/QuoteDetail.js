import { useParams } from "react-router-dom";
import {Route} from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES=[
  {id:'q1', author:'Levy Chacon',text: 'Learn react is amazing'},
  {id:'q2', author:'Levy Almeida de Lima Chacon', text: 'Learn react is great for get a job'}

]

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote)=> quote.id=== params.quoteId);

  if(!quote){
    return <p>No quotes found </p>
  }

  return (
    <div>
      <HighlightedQuote author={quote.author} text={quote.text}></HighlightedQuote>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </div>
  );
};

export default QuoteDetail;
