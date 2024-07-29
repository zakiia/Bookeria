import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="services-title text-center mt-3">Welcome to blog page</h2>
      <div className="mx-5 my-5">
        <h4>1. Difference between authorization and authentication.</h4>
        <p>
          <span>
            Authentication is the method of verifying the identity of a consumer
            or system to ensure they’re who they claim to be. It involves
            checking credentials which include usernames, passwords, or
            biometric information like fingerprints or facial recognition. This
            step is vital for securing access to systems, programs, and
            sensitive records. By confirming identities, authentication saves
            you from unauthorized entry and protects you against safety
            breaches.
          </span>
          <br />
          <br />
          <span>
            Authorization is the method of figuring out and granting permissions
            to a demonstrated user or system, specifying what assets they can
            access and what actions they’re allowed to carry out. It comes after
            authentication and guarantees that the authenticated entity has the
            proper rights to use certain data, applications, or services. This
            step is important for implementing protection guidelines and
            controlling access within the system, thereby stopping unauthorized
            activities.
          </span>
        </p>
        <h4>
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p>
          <span>
            {" "}
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more.
          </span>

          <span>
            Other Options for Implementing Authentication: <br />
            1. Auth0. <br />
            2. Amazon Cognito. <br />
            3. Okta. <br />
            4. Keycloak. <br />
            5. Passport.js.
          </span>
        </p>
        <h4>
          3. What other services does firebase provide other than
          authentication?
        </h4>
        <p>
          Firebase offers a comprehensive suite of services designed to help
          developers build, improve, and grow their apps. Here are some of the
          key services provided by Firebase beyond authentication: <br />
          1. Realtime Database <br />
          2. Firebase Storae <br />
          3. Firebase Hosting <br />
          4. Firebase Perfomance Monitoring <br />
          5. Firebase Analytic <br />
          6. Firebase Dynamic Links
        </p>
      </div>
    </div>
  );
};

export default Blog;
