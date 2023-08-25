import PropTypes from 'prop-types';
import { Table, TableTitle, TablElement } from './transaction.styled';
export function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
          <TableTitle>ID</TableTitle>
        </tr>
      </thead>
      {items.map(({ type, amount, currency,id }) => (
        
        <tbody>
          <tr>
            <TablElement>{type}</TablElement>
            <TablElement>{amount}</TablElement>
            <TablElement>{currency}</TablElement>
            <TablElement>{id}</TablElement>
          </tr>
        </tbody>
      ))}
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
