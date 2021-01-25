import React from 'react';
import {User} from 'react-feather';

export default function Profile() {
    return (
        <div>
            <div className="container rounded mb-3" style={{width: 400, background: "#ddd"}} >
                <div className="row ">
                    <div className="col-4">
                            <User width={100} height={100} />
                    </div>
                    <div className="col strong">
                        <div className="container">
                            <div className="row">
                        Name: Raiitto
                            </div>
                            <div className="row">
                        Job: Web Api developer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
