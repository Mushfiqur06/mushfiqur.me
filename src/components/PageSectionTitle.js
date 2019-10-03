import React, { Component } from 'react';

class PageSectionTitle extends Component {
    state = {  }
    render() { 
        return (
            <div className="pageSectionTitleWrapper text-center">
                <h2 className="pageSectionTitleWrapper__title">Job Experience</h2>
                <p className="pageSectionTitleWrapper__info">I have 4 years <b> job experience </b> as a professional Front-End Developer</p>
            </div>
        );
    }
}
 
export default PageSectionTitle;