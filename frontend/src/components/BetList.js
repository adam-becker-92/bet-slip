import BetItem from './BetItem';

const List = ({ odds, updateBets }) => {
    return <div className="list">
        {!!odds.length && odds.map(odd => <BetItem key={odd.bookmakerBetId} updateValues={updateBets} bet={odd} />)}
    </div>;
};

export default List;
