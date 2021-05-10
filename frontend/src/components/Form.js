import { useState, useEffect } from 'react';
import DropDown from './DropDown';
import BetList from './BetList';

const filterOptions = [
    { value: 'MORE', label: 'More than 2', endpoint: 'decimalOddsMoreThanTwo' },
    { value: 'LESS', label: 'Less than 2', endpoint: 'decimalOddsLessThanTwo' }
];

const Form = ({submit}) => {
    const [selectedFilter, setFilter] = useState(filterOptions[0]);
    const [odds, setOdds] = useState([]);
    const [selectedBets, setSelectedBets] = useState({});
    const currentBets = Object.keys(selectedBets);

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:4000/${selectedFilter.endpoint}`);
            const data = await response.json();
            setOdds(data);
        })();
    }, [ selectedFilter ]);

    const setSelectedFilter = (updatedFilter) => {
        setFilter(updatedFilter);
    }

    const updateBetHash = (id, value, betItem) => {
        const newHash = {
            ...selectedBets,
            [id]: {
                ...betItem,
                value
            }
        }
        setSelectedBets(newHash);
    }

    return <div className="form">
        <div className="form__title">Betslip</div>
        <div className="form__selector">
            <DropDown selectedFilter={ selectedFilter } filters={ filterOptions } setFilter={ setSelectedFilter } />
        </div>
        <div className="form__list">
            <BetList updateBets={updateBetHash} odds={odds.map((bet) => {
                if(currentBets.includes(bet.bookmakerBetId)) {
                    return {
                        ...bet,
                        value: selectedBets[bet.bookmakerBetId].value
                    }
                }
                return bet
            })} />
        </div>
        <div className="form__submit-button">
            <button onClick={() => submit(selectedBets)}>Submit Bet</button>
        </div>
    </div>;
};

export default Form;
