import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({postData}) => {

    return (
        <div>
            {postData.split(/(#[^\s#]+)/g).map((cur, key) => {
                console.log(cur)
                if (cur.match(/(#[^\s#]+)/)) {
                    return <Link href={`/hashtag/${cur.slice(1)}`} key={key}>
                        <a>{cur}</a>
                    </Link>;
                }
                return cur;
            })}
        </div>
    );
};

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired,

};

export default PostCardContent;