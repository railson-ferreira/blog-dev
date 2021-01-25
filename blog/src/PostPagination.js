import React from 'react'

const liStyle = {
  display: "inline",
  marginRight: 3
}
export default function PostPagination() {
    return (
        <div className="d-flex justify-content-center">
            <ul style={{listStyle: "none"}}>
                <li style={liStyle}>{"<"}</li>
                <li style={liStyle}>1</li>
                <li style={liStyle}>2</li>
                <li style={liStyle}>3</li>
                <li style={liStyle}>4</li>
                <li style={liStyle}>5</li>
                <li style={liStyle}>6</li>
                <li style={liStyle}>{">"}</li>
            </ul>
        </div>
    )
}
