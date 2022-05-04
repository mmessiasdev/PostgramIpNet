import { useState } from "react";
import { IoMdSend } from 'react-icons/io';

const Posts = () => {

    const [comments, setComments] = useState()
    const [allComments, setAllComments] = useState([]) // State react used to show the values in <li> just when click in the button "comment"

    function changesTextarea(event) {
        setComments(event.target.value)
    }

    function clickButton() {
        const allPreviousComments = [...allComments, comments]
        setAllComments(allPreviousComments)
    }

    return (<div className="post">
        <div className="mainPost">

        </div>
        <div className="comments">
            <div className="commentsDiv">
                <ul>
                    {allComments.map(eachComment => (
                        <li className="commentsBar" key={eachComment}>
                            <h5 className="commentName">Nome</h5>
                            {eachComment}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="commentInput">
                <input className="commentBar" onChange={changesTextarea} placeholder="Comente Algo..." ></input>
                <button onClick={clickButton} className="commentButton" ><IoMdSend /></button>
            </div>
        </div>
    </div>)
};

export default Posts;