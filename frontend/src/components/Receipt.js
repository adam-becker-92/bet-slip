const Receipt = ({ hash }) => {
    const total = Object.keys(hash).map((key) => hash[key].value).reduce((total, num) => {
        return total+= parseFloat(num)
    }, 0);
    return <div className="receipt">
        <div className="receipt__header">
            Receipt
        </div>
        <div className="receipt__sub-title">
            Your bet has been placed
        </div>
        <div className="receipt__bets">
            {Object.keys(hash).map((bet) => {
                const { name, oddsDecimal, value, bookmakerBetId} = hash[bet];
                return <div key={bookmakerBetId} className="receipt__bet-item">
                    <div>{ name }</div>
                    <div>{ oddsDecimal }</div>
                    <div>{ parseFloat(value).toFixed(2) }</div>
                </div>;
            })}
        </div>
        <div className="receipt__total">
            Bet Total <strong>£{total.toFixed(2)}</strong>
        </div>
    </div>;
};

export default Receipt;
