import React from 'react';

// const langArr = ['Dansk', 'Deutsche', 'English', 'Español', 'Italiano', 'Nederlands', '中文', '한국어', '日本語']

class Footer extends React.Component {
  render() {
    return (
        <div className='footer-links'>
          <div className='footer-links-column'>
          <label className='footer-column-category'>About Me</label>
            <a className='bio-link' target="_blank" href='https://www.linkedin.com/in/qin-yong-david-chen-081b752b/'>LinkedIn</a>
            <br />
            <a className='bio-link' target="_blank" href='https://github.com/qydchen'>Github</a>
          </div>

          <div className='footer-links-column'>
            <label className='footer-column-category'>SafeHavn</label>
            <div className='dummy-link'>About Us</div>
            <div className='dummy-link'>Policies</div>
            <div className='dummy-link'>Terms</div>
            <div className='dummy-link'>Privacy</div>
          </div>

          <div className='footer-links-column'>
            <label className='footer-column-category'>Discover</label>
            <div className='dummy-link'>Trust & Safety</div>
            <div className='dummy-link'>Site Map</div>
          </div>

          <div className='footer-links-column'>
            <label className='footer-column-category'>Hosting</label>
            <div className='dummy-link'>Why Host</div>
            <div className='dummy-link'>Responsible Hosting</div>
          </div>
        </div>
    );
  }
}

export default Footer;
