import { useState } from "react";
import { IoMdSend } from 'react-icons/io'; // Ícone de envio da mensagem



// ---------- COMPONENTE DE POSTS CENTRAL DA APLCIAÇÃO ---------- // 

const Posts = ({ imagePost, avatar, name, comment }) => {

    const [comments, setComments] = useState(''); // State responsavél pela ação de envio dos Comentários
    const [allComments, setAllComments] = useState([]); // State de passagem dos comentários de input pra Div


    // Set de valores dos Comentários   
    function changesTextarea(event) {
        setComments(event.target.value)
    }


    // Responsavél pela ação clique dos comentários
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

    return (<div className="post" data-aos="fade-in">
        <article title="userName" className="userName">
            <div className="avatar"><img src={avatar} /></div>
            <div className="name" id="name">{name}</div>
        </article>
        <div className="mainPost">
            <div className="divPost" role={"imagePost"}>
                <img src={imagePost}/>
            </div>
        </div>
        <div className="comments">
            <div className="commentsDiv">
                <ul>
                    {allComments.map(eachComment => (
                        <li className="commentsBar" key={eachComment}>
                            <h5 role={'youCommit'} className="commentName">Você</h5>
                            {eachComment}
                        </li>
                    ))}
                </ul>
                <ul>
                    <li className="commentsBarUser">
                        <h5 role={'usersCommit'}> {comment}</h5>
                    </li>
                </ul>
            </div>
            <div className="commentInput">
                <input className="commentBar" value={comments} onChange={changesTextarea} placeholder="Comente Algo..." ></input>
                <button onClick={clickButton} className="commentButton" ><IoMdSend /></button>
            </div>
        </div>
    </div>)
};

export default Posts;