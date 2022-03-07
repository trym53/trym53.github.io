import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.jpg';
import { FaGithub } from 'react-icons/fa';

export const Header = () => {
    return (
        <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
          {/* overlayはカバー画像の上に透過して表示される背景要素です */}
          <div className="overlay"></div>
          <div className="container">
            <div className="display-table">
              <div className="display-table-contents">
                {/* カバー画像 */}
                <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
                {/* 名前と肩書はみなさんのお名前や肩書を自由に入れてください */}
                <h1 className="title-text">trym53</h1>
                <h3 className="title-text">はじめまして</h3>
                <ul className="social-icons">
                  <li className="icon-link">
                    <a href="https://github.com/trym53">
                        <FaGithub color="white" size="2rem" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
    );
};