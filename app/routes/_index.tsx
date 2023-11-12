import { LinksFunction } from "@remix-run/node";
import styles from "../styles/index.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

const PlaceholderImage = () => <div className="placeholder image" />;

const IntroSection = () => {
  return (
    <div className="intro section">
      <div className="intro title">
        <PlaceholderImage />
        <div className="title text">Anthony Francis</div>
      </div>
      <div className="intro content">
        <div className="content subtitle">
          Melbourne-based freelance web &amp; app developer
        </div>
        <div className="content text">
          Developing websites and native mobile apps for 10+ years
        </div>
      </div>
    </div>
  );
};

const WebServicesSection = () => {
  return (
    <div className="web-services section">
      <h1>We design, develop &amp; deploy websites</h1>
      <div className="content carousel">
        <div className="carousel item">
          <div className="top">
            <PlaceholderImage />
            <div className="title">Bespoke Design & Deploy</div>
          </div>
          <p>
            Not just another WordPress site, our websites are custom made for
            each of our clients, hosted on our servers or yours.
          </p>
          <div>Learn More &gt;</div>
        </div>
        <div className="carousel item">
          <div className="top">
            <PlaceholderImage />
            <div className="title">Mobile-First Design</div>
          </div>
          <p>
            60% of all web traffic comes from mobile devices, our designs ensure
            that your site looks great at any size.
          </p>
          <div>Learn More &gt;</div>
        </div>
        <div className="carousel item">
          <div className="top">
            <PlaceholderImage />
            <div className="title">Lightning-fast Loading</div>
          </div>
          <p>
            Our sites load faster than a typical WordPress site, as a result of
            our optimised code & our ability to deploy to the servers closest to
            your customers.
          </p>
          <div>Learn More &gt;</div>
        </div>
        <div className="carousel item">
          <div className="top">
            <PlaceholderImage />
            <div className="title">Omni-Browser Experience</div>
          </div>
          <p>
            Our responsive designs ensure that your site looks and feels the
            same on your laptop, tablet, phone, TV, refrigerator...
          </p>
          <div>Learn More &gt;</div>
        </div>
      </div>
    </div>
  );
};

// const HostingServicesSection = () => {
//   return (
//     <div className="hosting-services section">
//       <h1>&lt;web.hosting&gt;</h1>
//       <div className="content carousel">
//         <div className="carousel item">
//           <div className="top"><PlaceholderImage />
//           <div className="title">Managed DC Hosting</div></div>
//           <p>
//             Fully managed hosting in an Australian data centre (or outside
//             Australia if requested). Ideal for small-medium websites.
//           </p>
//         </div>
//         <div className="carousel item">
//           <div className="top"><PlaceholderImage />
//           <div className="title">Managed Cloud Hosting</div></div>
//           <p>
//             Fully managed cloud-based hosting. Demand-based scaling with full
//             redundancy ensures that your site is never down. Worry-free hosting
//             for larger websites.
//           </p>
//         </div>
//         <div className="carousel item">
//           <div className="top"><PlaceholderImage />
//           <div className="title">Unmanaged Hosting</div></div>
//           <p>
//             For the DIYer who wants to get their hands dirty, but also needs a
//             hand from time to time. DC or Cloud Hosting available.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

const AppServicesSection = () => {
  return (
    <div className="app-services section">
      <h1>We design, develop & deploy mobile apps</h1>
      <div className="content carousel">
        <div className="carousel item">
          <div className="top">
            <PlaceholderImage />
            <div className="title">Native Code</div>
          </div>
          <p>
            No smoke and mirrors, our apps aren't just websites in disguise.
            Native code means that your app will run as fast as possible.
          </p>
          <div>Learn More &gt;</div>
        </div>
        <div className="carousel item">
          <div className="top">
            <PlaceholderImage />
            <div className="title">Omni-Device Experience</div>
          </div>
          <p>
            Our responsive designs & omni-device development means that your app
            will look great on any iOS or Android device.
          </p>
          <div>Learn More &gt;</div>
        </div>
        <div className="carousel item">
          <div className="top">
            <PlaceholderImage />
            <div className="title">App Store Management</div>
          </div>
          <p>
            We can take care of the deploy for you. We publish the app to iOS or
            Android devices, manage In-App Purchases, send Push Notifications,
            and take care of any maintenance.
          </p>
          <div>Learn More &gt;</div>
        </div>
      </div>
    </div>
  );
};

const OtherServicesSection = () => {
  return (
    <div className="other-services section">
      <h1>We provide solutions for web hosting</h1>
      <div className="content carousel">
        <div className="carousel item">
          <div className="top">
            <PlaceholderImage />
            <div className="title">Domain Names</div>
          </div>
          <p>
            Domain name registration and management can be a real hassle. Let
            our 20+ years of experience do it for you.
          </p>
          <div>Learn More &gt;</div>
        </div>
        <div className="carousel item">
          <div className="top">
            <PlaceholderImage />
            <div className="title">Web Hosting</div>
          </div>
          <p>
            We can provide dedicated server hosting in any Australian capital
            city, as well as distributed cloud hosting in Australia or across
            the world.
          </p>
          <div>Learn More &gt;</div>
        </div>
        <div className="carousel item">
          <div className="top">
            <PlaceholderImage />
            <div className="title">Website Migrations</div>
          </div>
          <p>
            We can migrate your current website (and email) from any webhost to
            any other provider.
          </p>
          <div>Learn More &gt;</div>
        </div>
      </div>
    </div>
  );
};

const index = () => {
  return (
    <div className="page">
      <IntroSection />
      <WebServicesSection />
      {/* <HostingServicesSection /> */}
      <AppServicesSection />
      <OtherServicesSection />
    </div>
  );
};

export default index;
