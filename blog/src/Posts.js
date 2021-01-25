import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { useState } from 'react';
import {Circle} from 'react-feather';
import FullPost from './FullPost';
import PostPagination from './PostPagination';

const POSTS_QUERY = gql`
query MyQuery {
    posts {
      nodes {
        id
        preview {
          node {
            content
          }
        }
        date
        title
      }
    }
  }
`;

const Posts = () => {
    const [postSelected, setPostSelect] = useState(null);
    const { loading, error, data } = useQuery(POSTS_QUERY);
    const posts = data?.posts.nodes;

    if(loading) return <p>Loading Posts...</p>;
    if(error) return <p>Error</p>

    function onClickPostSelect(postId){
        setPostSelect(postId);
    }

    return (
        <>
            {
                postSelected !== null ? (
                    <>
                    <FullPost postId={postSelected} />
                    </>
                ) : (
                    <>
                    <div className="container" style={{width:400}}>
                    {
        posts.map(({preview, date, title, id}, index) => {
            return (
                <>
                <div key={index} style={{width:400}} className="row">
                    <div className="container mb-3 bg-light rounded">
                        <div className="row">
                            <div className="col-2 d-flex align-items-center">
                                <Circle onClick={() => onClickPostSelect(id)}/>
                            </div>
                            <div className="col">
                                
                                <div className="row">
                                    <h3>{title}</h3>
                                </div>
                                <div className="row">
                                <span>{date}</span>
                                </div>
                                <div className="row">
                                <div dangerouslySetInnerHTML={{__html: preview?.node?.content ?? ""}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                </>
            )
        })}
        </div>
        <PostPagination />
                    </>
                )
    }
        </>
    )
}

export default Posts;