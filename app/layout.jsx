import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import GoogleAnalytics from "@utils/GoogleAnalytics";

export const metadata = {
  title: "Prompt-Share",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
    <footer className="w-full py-6">
      <p className="mx-auto text-sm text-center">Powered by <a href="https://vincidigitalventures.com" target="_blank" className="underline">
        Vinci Digital Ventures</a> &copy; 2023</p>
    </footer>
  </html>
);

export default RootLayout;
