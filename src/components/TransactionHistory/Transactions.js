import PropTypes from "prop-types";
export function TransactionHistory ({items}) {
    return (
        <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>ID</th>
          </tr>
        </thead>
      {items.map(({type,amount,currency}) => (
        <tbody>
          <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
            
          </tr>
        </tbody>
        ))}
      </table>  
    );
      }     
      

      TransactionHistory.propTypes = {
        items: PropTypes.arrayOf(
          PropTypes.exact({
            id: PropTypes.string.isRequired,
            type:PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency:PropTypes.string.isRequired,
          })
        ).isRequired,
      }

