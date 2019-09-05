import React from 'react';

const User = () => (
    <div className='user-info'>
        <div className="row">
            <div className="col-md-3 col-sm-4">
                <img  src="https://avatars3.githubusercontent.com/u/6461792?s=460&v=4" className="img-fluid"/>
            </div>
            <div className="col-md-3 col-sm-8">
                <a href=''>
                    wander4747
                </a>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-md-12">
                <ul class="list-group">
                <li class="list-group-item">Repositórios:</li>
                <li class="list-group-item">Seguidores:</li>
                <li class="list-group-item">Seguindo:</li>
            </ul>
            </div>
        </div>
    </div>
)

export default User;