import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from './Logo';
export default function Footer() {
  return (
    <StyledFooter>
      <div className="inner-footer">
        <div className="upper-footer">
          <Logo />
          <div className="upper-footer-right">
            <nav>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
            <div className="socials">
              <i className="icon-facebook" />
              <i className="icon-linkedin" />
              <i className="icon-instagram" />
            </div>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        &copy; Copyright CCPV Copywriting {new Date().getFullYear()}
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: #f9f9f9;
  border: 1px solid #bbbbbb;
  .inner-footer {
    margin: 0 auto;
    max-width: 1600px;
  }
  .upper-footer {
    padding: 4rem 8rem;
    display: flex;
    justify-content: space-between;
  }
  .upper-footer-right {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
  nav {
    display: flex;
    gap: 1.4rem;
    font-size: 0.8rem;
  }
  .socials {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 0.8rem;
  }
  .lower-footer {
    background: #009288;
    padding: 1rem 0;
    text-align: center;
    color: white;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 1100px) {
    .upper-footer {
      padding: 2rem 2rem;
    }
  }
  @media only screen and (max-width: 600px) {
    nav {
      display: none;
    }
    .upper-footer {
      align-items: center;
    }
  }
`;
