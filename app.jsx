import React from 'react';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Recipe Sharing Platform</title>
        <style>{`
          /* Define custom color variables with our new palette */
          :root {
            --background: #FFF9F4;
            --foreground: #333333;
            --card: #FFFFFF;
            --primary: #D7263D;
            --primary-foreground: #FFFFFF;
            --muted: #E9ECEF;
            --input: #FFFFFF;
            --border: #CCCCCC;
            --secondary: #F4A261;
            --secondary-foreground: #FFFFFF;
            --tertiary: #2A9D8F;
            --accent: #D7263D;
          }

          /* Utility classes (mimicking Tailwind-like utilities) */
          .flex { display: flex; }
          .flex-col { flex-direction: column; }
          .p-8 { padding: 2rem; }
          .bg-background { background-color: var(--background); }
          .text-foreground { color: var(--foreground); }
          .flex-1 { flex: 1; }
          .bg-card { background-color: var(--card); }
          .p-6 { padding: 1.5rem; }
          .rounded-lg { border-radius: 0.5rem; }
          .shadow-lg { 
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 
                        0 4px 6px -2px rgba(0,0,0,0.05); 
          }
          .transition-transform { transition: transform 0.3s; }
          .transform { transform: none; }
          .hover-scale:hover { transform: scale(1.05); }
          .mt-4 { margin-top: 1rem; }
          .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
          .font-bold { font-weight: bold; }
          .text-primary { color: var(--primary); }
          .mt-6 { margin-top: 1.5rem; }
          .bg-muted { background-color: var(--muted); }
          .p-4 { padding: 1rem; }
          .shadow-md { 
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 
                        0 2px 4px -1px rgba(0,0,0,0.06); 
          }
          .text-sm { font-size: 0.875rem; }
          .italic { font-style: italic; }
          .block { display: block; }
          .mt-2 { margin-top: 0.5rem; }
          .font-semibold { font-weight: 600; }
          .text-accent { color: var(--accent); }
          .text-xs { font-size: 0.75rem; }
          .mt-8 { margin-top: 2rem; }
          .mb-4 { margin-bottom: 1rem; }
          .w-full { width: 100%; }
          .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
          .transition-colors { transition: background-color 0.3s, color 0.3s; }
          .text-center { text-align: center; }

          /* Responsive classes for larger screens */
          @media (min-width: 1024px) {
            .lg-flex-row { flex-direction: row; }
            .lg-mt-0 { margin-top: 0; }
            .lg-ml-6 { margin-left: 1.5rem; }
          }

          /* Form input styling */
          .input-field {
            width: 100%;
            padding: 12px;
            border: 1px solid var(--border);
            border-radius: 8px;
            background-color: var(--input);
            color: var(--foreground);
            transition: border-color 0.3s;
          }
          .input-field:focus {
            border-color: var(--primary);
            outline: none;
          }
          .input-field::placeholder {
            color: var(--muted);
          }
          /* Link styling */
          a {
            text-decoration: none;
            color: var(--primary);
            transition: color 0.3s;
          }
          a:hover {
            color: var(--tertiary);
          }
          /* Button styling */
          button {
            cursor: pointer;
          }
          button:hover {
            filter: brightness(90%);
          }
          /* Logo styling */
          .logo {
            max-height: 100px;
            margin-bottom: 1rem;
          }
          header {
            text-align: center;
            margin-bottom: 2rem;
          }
        `}</style>
      </Helmet>

      <div className="bg-background text-foreground">
        {/* Header with Logo */}
        <header>
          <img src="logo.png" alt="Recipe Sharing Platform Logo" className="logo" />
        </header>

        <div className="flex flex-col lg-flex-row p-8">
          {/* Landing Section */}
          <div className="flex-1 bg-card p-6 rounded-lg shadow-lg transition-transform transform hover-scale">
            <h1 className="text-4xl font-bold text-primary">Discover New Recipes Every Day</h1>
            <p className="mt-4">Join our community and explore a world of culinary delights!</p>
            <div className="mt-6 bg-muted p-4 rounded-lg shadow-md">
              <p className="text-sm italic">
                "This platform is a game-changer! It's easy to use, provides valuable insights, and has helped me connect with fellow food lovers. I highly recommend it!"
              </p>
              <span className="block mt-2 font-semibold text-accent">Casey Bachmeyer</span>
              <span className="text-xs">Recipe Enthusiast</span>
            </div>
          </div>
          {/* Create Account Section */}
          <div className="flex-1 bg-card p-6 rounded-lg shadow-lg mt-8 lg-mt-0 lg-ml-6 transition-transform transform hover-scale">
            <h2 className="text-3xl font-bold text-primary">Create an Account</h2>
            <form className="mt-4">
              <input type="text" placeholder="First Name" className="input-field mb-4" required />
              <input type="text" placeholder="Last Name" className="input-field mb-4" required />
              <label htmlFor="occupation">Occupation *</label>
              <select id="occupation" name="occupation" className="input-field mb-4" required>
                <option value="">Select Occupation</option>
                <option value="student">Student</option>
                <option value="professional">Professional</option>
                <option value="chef">Chef</option>
                <option value="food-blogger">Food Blogger</option>
                <option value="other">Other</option>
              </select>
              <input type="tel" placeholder="Phone number" className="input-field mb-4" required />
              <input type="email" placeholder="Email" className="input-field mb-4" required />
              <input type="password" placeholder="Password" className="input-field mb-4" required />
              <label className="flex items-center mb-4">
                <input type="checkbox" required className="mr-2" />
                <span>
                  I accept the <a href="#">Privacy Policy</a>
                </span>
              </label>
              <button type="submit" className="bg-secondary text-secondary-foreground w-full py-2 rounded-lg transition-colors">
                Create an Account
              </button>
            </form>
            <p className="mt-4 text-center" style={{ color: 'var(--muted)' }}>
              Already have an account? <a href="#">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
