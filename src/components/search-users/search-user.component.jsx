import React from 'react'

const SearchUser = (props) => {
    return(
            <div className='container'>
                <div className='row'>
                    <div className='form-group mx-auto'>
                        <h3 className='text-center my-3 text-capitalize'>find best developer's profile</h3>
                        <div className='col'>
                        <input
                            type='search'
                            className='form-control'
                            placeholder='Search Developer'
                            onChange={props.searchUsers}
                        />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SearchUser;