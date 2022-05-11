import React from 'react';

function CreatePost() {
    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create A Post</h1>
                <div className="inputGp">
                    <label>Title:</label>
                    <input type="text" placeholder="Title" />
                </div>
                <div className="inputGp">
                    <label>Post:</label>
                    <textarea placeholder="Post" />
                </div>
                <button>Send my post</button>
            </div>
        </div>
    );
}

export default CreatePost;
