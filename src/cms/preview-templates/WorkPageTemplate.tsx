import * as React from "react";
import PostTemplate from "../../components/post/index";

const WorkPagePreview = ({ entry, widgetFor }) => {
    const format = {
        location: '',
        markdownRemark: {
            content: {
                html: entry.getIn(["data", "body"]),
            },
            frontmatter: entry.getIn(["data"]).toJS(),
        }
    };
    const siteContext = {
        site: {
            siteMetadata: {
                title: 'Aaron Arney'
            }
        }
    };

    return (
        <PostTemplate
            data={format}
            pageContext={siteContext}
        />
    );
}