import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Write = () => {

    const [value, setValue] = useState('');

    return (
    <div className="add">
        <div className="content">
            <input type="text" placeholder="Title" />
            <div className='editorContainer'>
                <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
        </div>
        <div className="menu">
            <div className="item">
                <h1>Publish</h1>
                <span>
                    <b>Status: </b> Draft
                </span>
                <span>
                    <b>Visbility: </b> Public
                </span>
                <input style={{display:"none"}} type="file" id="file" name=""/>
                <label htmlFor="file">Upload image</label>
                <div className="buttons">
                    <button>Save as a draft</button>
                    <button>Update</button>
                </div>
            </div>
            <div className="item">
                <input type="radio" name="cat" value="art" id="art"/>
                <label htmlFor="art">ART</label>
                <input type="radio" name="cat" value="science" id="science"/>
                <label htmlFor="science">SCIENCE</label>
                <input type="radio" name="cat" value="technology" id="technology"/>
                <label htmlFor="technology">TECHNOLOGY</label>
                <input type="radio" name="cat" value="cinema" id="cinema"/>
                <label htmlFor="cinema">CINEMA</label>
                <input type="radio" name="cat" value="design" id="design"/>
                <label htmlFor="design">DESIGN</label>
                <input type="radio" name="cat" value="food" id="food"/>
                <label htmlFor="food">FOOD</label>
            </div>
        </div>
    </div>
    )
}