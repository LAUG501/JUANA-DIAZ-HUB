/**
 * Weather & Alerts page.
 * Displays current weather conditions and alert feed.
 */
export default function WeatherAlertsPage() {
  const currentWeather = { temperature: 85, condition: 'Sunny', humidity: 70 };
  const alerts = [
    { title: 'Heat Advisory', issued: '2025-11-02', description: 'High temperatures expected. Stay hydrated and avoid direct sun exposure.' },
    { title: 'Tropical Storm Watch', issued: '2025-10-25', description: 'Monitor updates as a tropical storm approaches the region.' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Weather & Alerts</h1>
      <section className="p-4 border rounded">
        <h2 className="font-heading text-xl text-primary">Current Conditions</h2>
        <p className="text-sm">Temperature: {currentWeather.temperature}°F</p>
        <p className="text-sm">Condition: {currentWeather.condition}</p>
        <p className="text-sm">Humidity: {currentWeather.humidity}%</p>
      </section>
      <section>
        <h2 className="font-heading text-xl text-primary mb-2">Recent Alerts</h2>
        <ul className="space-y-3">
          {alerts.map((alert, idx) => (
            <li key={idx} className="border rounded p-3">
              <strong className="font-heading">{alert.title}</strong>
              <p className="text-xs text-neutralDark/70">Issued: {new Date(alert.issued).toLocaleDateString()}</p>
              <p className="text-sm">{alert.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}