import { useState } from 'react';
import Form from './components/Form';
import Receipt from './components/Receipt';

const Betslip = () => {
  const [showReceipt, setReceiptVisbility] = useState(false);
  const [betTotal, setBetTotal] = useState(0);

  const submitBetslip = (total) => {
    console.log(total);
    setBetTotal(total);
    setReceiptVisbility(true);
  }

  return (
    <div className="betslip">
      { showReceipt ? <Receipt hash={betTotal} /> : <Form submit={ submitBetslip } /> }
    </div>
  );
}

export default Betslip;
