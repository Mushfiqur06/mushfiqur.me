import React from 'react';

const PageSectionTitle = (props) => {
    return (
        <div className="pageSectionTitleWrapper text-center">
            <h2 className="pageSectionTitleWrapper__title">{props.title}</h2>
            <p className="pageSectionTitleWrapper__info">{props.info}</p>
        </div>
    );
}
 
export default PageSectionTitle;