import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

export default function FullPost({postId}) {
    const POST_QUERY = gql`
    query MyQuery {
        post (id: "${postId}") {
            content
            date
            title
        }
      }
    `;
    const { loading, error, data } = useQuery(POST_QUERY);
    console.log(loading, error, data);

    
    if(loading) return <p>Loading Post...</p>;
    if(error) return <p>Error</p>

    const {content, date, title} = data?.post;
    return (
        <div className="container mb-3 bg-light rounded " style={{width:600, textAlign: "center"}}>
        <div className="row d-flex justify-content-center" >
            <h3>{title}</h3>
        </div>
        <div className="row d-flex justify-content-center">
        <span>{date}</span>
        </div>
        <div className="row d-flex justify-content-center">
        <div dangerouslySetInnerHTML={{__html: content ?? ""}}/>
        </div>
        </div>
    )
}
