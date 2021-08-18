import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES=[
    {id:'q1', author:'Levy Chacon',text: 'Learn react is amazing'},
    {id:'q2', author:'Levy Almeida de Lima Chacon', text: 'Learn react is great for get a job'}

]

const AllQuotes=()=>{
    return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>


}

export default AllQuotes;
