import './Post.css'
import PostModelo from "components/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router";
import posts from '../../assets/json/posts.json';

export default function Post() {

    const paramentros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(paramentros.id);
    });

    if(!post){
        return <h1>Post não encontrado</h1>
    }



    return( 
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
            
        >
            <div className="post-markdown-container">
            <ReactMarkdown>
                {post.texto}
            </ReactMarkdown>

            </div>
        </PostModelo>
    )
}