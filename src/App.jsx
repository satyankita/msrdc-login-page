
import './App.css';
import samruddhi from './assets/samruddhi.png';
import msrdc from './assets/msrdc.jpg';
import bg from './assets/bg.avif';

function App() {
  return (
    <div className="login-container">

      <div className="left-section"
        style={{ backgroundImage: `url(${bg})` }}>

        <div className="overlay">

          <div className="logos">
            <div className="samruddhi-logo">
              <img src={samruddhi} alt="Samruddhi Mahamarg" />
            </div>

          <div className="msrdc-logo">
            <img src={msrdc} alt="MSRDC" />
          </div>
      </div>

          <div className="welcome-content">
            <h1>Welcome to</h1>
            <h2>Toll Management System</h2>
            <p>
              Maharashtra State Road Development Corporation
            </p>
          </div>

        </div>
      </div>

      <div className="right-section">
        <div className="login-box">

          <h1>Login</h1>
          <p>Please enter your credentials to continue</p>

          <form>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />

            <button type="submit">Login</button>
          </form>

          <div className="powered">
            Powered by <strong>AMNEX</strong>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
