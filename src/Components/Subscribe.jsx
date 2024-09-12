import '../App.css';
const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <h2>Get 10% Off Your First Order!</h2>
      <p>Sign up for our newsletter to receive exclusive offers and updates.</p>
      <form className="subscribe-form">
        <input
          type="email"
          placeholder="Enter your email address"
          className="subscribe-input"
          required
        />
        <button type="submit" className="subscribe-button">Subscribe</button>
      </form>
    </div>
  );
}

export default Subscribe;
