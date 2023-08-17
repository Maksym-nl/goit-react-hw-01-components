export function Statistics ({ title, stats }) {
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <ul className = "stat-list">
      {stats.map(stat => (
        <li key={stat.id} class="item">
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>;
}
