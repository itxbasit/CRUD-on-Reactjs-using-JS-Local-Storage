import { useState } from 'react';
import './register.css'
import logo from '../occupation.png'
import { NavLink } from 'react-router-dom';

function Register() {

    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [year, setYear] = useState();

    return (
        <div>
            <div className='header'>
                <div className='sub-header'>
                    <img src={logo} />
                    <p>Book Management App</p>
                </div>
                <div>
                    <NavLink to={'/view'}>
                        <button>View Register Book</button>
                    </NavLink>
                </div>
            </div>
            <div className='register'>

                <div className="reg-frame">
                    <h1>Book Registration</h1>
                    <hr />
                    <div className='form'>
                        <label>Title</label>
                        <br />
                        <input value={title} onChange={(e) => e.target.value &&
                            setTitle(e.target.value)} type='text' placeholder='Title' id='title' />
                        <br />
                        <label>Author</label>
                        <br />
                        <input value={author} onChange={(e) => e.target.value &&
                            setAuthor(e.target.value)} type='text' placeholder='Author' id='author' />
                        <br />
                        <label>Year</label>
                        <br />
                        <input value={year} onChange={(e) => e.target.value &&
                            setYear(e.target.value)} type='number' placeholder='Year' id='year' />
                        <br />
                        <div>
                            <button onClick={() => {
                                let arr = []
                                arr = localStorage.getItem("Book_Material");
                                arr = JSON.parse(arr)
                                title && author && year && arr ? arr.unshift({
                                    title: title, author, year, read: false, edit: false
                                }) : console.log()
                                title && author && year && arr ? localStorage.setItem("Book_Material", JSON.stringify(arr)) : title && author && year && localStorage.setItem("Book_Material", JSON.stringify([{ "title": title, "author": author, "year": year, "read": false, "edit": false }]))
                                setTitle("")
                                setAuthor("")
                                setYear("")
                            }}>Register</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;