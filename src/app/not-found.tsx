/**
 * 404 Not Found page.
 * Displays when a user visits a route that doesn't exist.
 */
export default function NotFound() {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-5xl font-heading text-primary">404</h1>
      <p className="text-lg">The page you’re looking for could not be found.</p>
      <a href="/" className="text-primary underline">Return to Home</a>
    </div>
  );
}