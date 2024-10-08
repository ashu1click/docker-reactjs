import React, { Component } from 'react';
 
export default class Nav extends Component {
  componentDidMount() {
    this.callAuthorizeAPI();
  }
 
  callAuthorizeAPI = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/authorize', {
        method: 'POST',
        headers: {
          'sec-ch-ua-platform': '"Windows"',
          'Referer': 'http://localhost:3000/',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
          'Accept': 'application/json, text/plain, */*',
          'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
          'Content-Type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          'Cookie': 'sessionid=55a60og0y6mmwq8mofrj0o133urkf4io',
        },
        body: JSON.stringify({
          username: 'cp_deviare_admin',
          password: 'Deviare@2024!@#'
        })
      });
     
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
 
      const data = await response.json();
      console.log('API Response:', data);
 
    } catch (error) {
      console.error('Error fetching the API:', error);
    }
  };
 
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">HOME</a></li>
            <li><a href="https://www.facebook.com">FACEBOOK</a></li>
            <li><a href="https://www.linkedin.com">LINKED IN</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
