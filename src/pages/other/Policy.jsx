import { Box } from "@mui/material";
import React from "react";
import UniversalHero from "../../components/Layout/UniversalHero";
import Footer from "../../components/Layout/Footer";

function Policy() {
  return (
    <Box>
      <UniversalHero
        title="Privacy Policy

"
      />
      <Box m={"50px"}>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Bachelor Web (the "Website"). This Privacy Policy explains
          how we collect, use, disclose, and safeguard your personal information
          when you visit our Website and use our services. By using the Website,
          you consent to the data practices described in this Privacy Policy.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect personal information from you when you voluntarily
          submit it to us, such as when you register for an account, purchase a
          course, or contact our customer support. The types of personal
          information we may collect include your name, email address, billing
          address, and payment details.
        </p>

        <h2>3. Use of Information</h2>
        <p>
          We use the information we collect for various purposes, including:
        </p>
        <ul>
          <li>Providing and maintaining our services</li>
          <li>Processing your course purchases and fulfilling your requests</li>
          <li>Communicating with you about your account and course updates</li>
          <li>Improving our services and developing new features</li>
          <li>Protecting against fraudulent or unauthorized transactions</li>
        </ul>

        <h2>4. Disclosure of Information</h2>
        <p>
          We may share your personal information with third parties in certain
          situations, including:
        </p>
        <ul>
          <li>
            Service providers who assist us in operating our business and
            providing our services
          </li>
          <li>
            Law enforcement or government agencies when required by applicable
            law or to protect our legal rights
          </li>
          <li>
            Third parties in connection with a merger, acquisition, or sale of
            our business
          </li>
        </ul>
        <p>
          We will not sell, rent, or lease your personal information to any
          third party without your consent, except as described in this Privacy
          Policy.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or
          destruction. However, no method of transmission over the internet or
          electronic storage is 100% secure, and we cannot guarantee absolute
          security.
        </p>

        <h2>6. Your Choices</h2>
        <p>
          You have the right to access, correct, update, and delete your
          personal information. If you would like to exercise any of these
          rights or have any questions or concerns regarding your personal
          information, please contact us using the information provided below.
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          Our Website and services are not intended for children under the age
          of 13. We do not knowingly collect personal information from children
          under 13. If we become aware that we have collected personal
          information from a child under 13 without parental consent, we will
          take steps to remove that information from our servers.
        </p>

        <h2>8. Changes to this Privacy Policy</h2>
        <p>
          We reserve the right to update or change this Privacy Policy at any
          time. We will notify you of any changes by posting the new Privacy
          Policy on this page. It is your responsibility to review this Privacy
          Policy periodically for any changes.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy,
          please contact us at [Your Contact Information].
        </p>
      </Box>
      <Footer />
    </Box>
  );
}

export default Policy;
