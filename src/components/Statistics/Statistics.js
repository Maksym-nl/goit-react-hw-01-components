import PropTypes from "prop-types";
import { Title,List, Item } from "./Statistics.styled";
export function Statistics ({ title, stats }){
return (
  <section className="statistics">
    {title && <Title>{title}</Title>}

    <List>
      {stats.map(stat => (
        <Item key={stat.id} class="item">
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </Item>
      ))}
    </List>
  </section>
);
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}

