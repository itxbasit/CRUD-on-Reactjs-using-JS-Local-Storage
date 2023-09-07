import logo from '../../occupation.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './crud.css'
import { AiOutlineRead, AiFillCheckCircle, AiFillEdit, AiFillSwitcher, AiFillDelete } from "react-icons/ai";

function View() {

    let [book, setBook] = useState([]);
    let bookDetail = []
    bookDetail = localStorage.getItem("Book_Material");
    bookDetail = JSON.parse(bookDetail)
    book = bookDetail;
    return (
        <div>
            <div className='header'>
                <div className='sub-header'>
                    <img src={logo} />
                    <p>Book Management App</p>
                </div>
                <div>
                    <NavLink to={'/'}>
                        <button>Register Book</button>
                    </NavLink>
                </div>
            </div>
            <div className='list-header'>
                <h1>Books List</h1>
                <ul className='list-header-book'>
                    <li>SNo</li>
                    <li>Title</li>
                    <li>Author</li>
                    <li>Year of Publish</li>
                    <li>Read or Unread</li>
                    <li>Edit</li>
                    <li>Delete</li>
                </ul>
                <ul className='list-book'>
                    {book.map((v, i) => <li key={i}>
                        <div>                        
                            <label>{i + 1}</label>
                        </div>

                        <div>
                            {
                                v.edit ? <input type="text" onChange={(e) => {
                                    book[i].title = e.target.value;
                                }} defaultValue={v.title} /> : <label>{v.title}</label>
                            }
                        </div>
                        <div>
                            {
                                v.edit ? <input type="text" onChange={(e) => {
                                    book[i].author = e.target.value;
                                }} defaultValue={v.author} /> : <label>{v.author}</label>
                            }
                        </div>
                        <div>
                            {
                                v.edit ? <input type="number" onChange={(e) => {
                                    book[i].year = e.target.value;
                                }} defaultValue={v.year} /> : <label>{v.year}</label>
                            }
                        </div>
                        <div>
                            {v.read ? <label onClick={() => {
                                const arr = [...book]
                                arr[i].read = false
                                setBook(arr)
                                localStorage.setItem("Book_Material", JSON.stringify(arr))
                            }} className="edit-btn btn">Read <AiFillCheckCircle /></label> :
                                <label onClick={() => {
                                    const arr = [...book]
                                    arr[i].read = true
                                    setBook(arr)
                                    localStorage.setItem("Book_Material", JSON.stringify(arr))
                                }}
                                    className="update-btn btn">Unread <AiOutlineRead /></label>
                            }
                        </div>
                        <div>
                            {v.edit
                                ? <label onClick={() => {
                                    const arr = [...book]
                                    arr[i].edit = false
                                    setBook(arr)
                                    localStorage.setItem("Book_Material", JSON.stringify(arr))
                                }} className="edit-btn btn"><AiFillEdit /></label> :
                                <label onClick={() => {
                                    const arr = [...book]
                                    arr[i].edit = true
                                    setBook(arr)
                                    localStorage.setItem("Book_Material", JSON.stringify(arr))
                                }}
                                    className="update-btn btn"><AiFillSwitcher /></label>
                            }
                        </div>
                        <div>
                            <label onClick={() => {
                                const arr = [...book]
                                arr.splice(i, 1)
                                setBook(arr)
                                localStorage.setItem("Book_Material", JSON.stringify(arr))
                            }} className="del-btn btn"><AiFillDelete /></label>
                        </div>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default View;
