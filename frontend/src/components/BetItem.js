import { useState } from 'react';

const Bet = ({ bet, updateValues }) => {
    const {name, oddsDecimal} = bet;
    const [amount, setAmount] = useState(bet.value || 0);

    const updateValue = (evt) => {
        const newAmount = evt.target.value;
        console.log(newAmount);
        setAmount(newAmount);
        updateValues(bet.bookmakerBetId, newAmount, bet);
    };

    return <div className="bet">
        <div className="bet__details">
            <div className="bet__name">{ name }</div>
            <div className="bet__amount">{ oddsDecimal }</div>
        </div>
        <div className="bet__input">
            <div className="bet__input-label">Amount</div>
            <div className="bet__input-field">
                <input type="number" value={amount} onChange={updateValue} placeholder='0.00' />    
            </div>
        </div>
    </div>;
};

export default Bet;
