import { useState } from "react";
import { IoMdSend } from 'react-icons/io';

import Data from '../../../Model/users.json';

const Posts = ({imagePost}) => {

    const [comments, setComments] = useState('');
    const [allComments, setAllComments] = useState([]);

    function changesTextarea(event) {
        setComments(event.target.value)
    }

    function clickButton() {
        const allPreviousComments = [...allComments, comments]
        setAllComments(allPreviousComments)

        if (comments === '') {
            alert('Escreva um comentário Válido.')
            return;
        } try {
            setComments("");
        } catch (error) {

        }
    }

    return (<div className="post">
        <div className="mainPost">
            <img src={imagePost} alt="" />
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
                {Data.map((results) => {
                    return (<ul key={results.userid} >

                       {results.comments.map(data => {
                            return (<div key={results.userid}>{data.user.map(cname => {return <li className="commentsBar" key={results.userid}><h5>{cname.namecomment}</h5>{cname.comment}</li>})}</div>)
                        })}


                 
                    </ul>)
                })}



            </div>
            <div className="commentInput">
                <input className="commentBar" value={comments} onChange={changesTextarea} placeholder="Comente Algo..." ></input>
                <button onClick={clickButton} className="commentButton" ><IoMdSend /></button>
            </div>
        </div>
    </div>)
};

export default Posts;