import './Post.css'
import PostModelo from "components/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Outlet, Route, Routes, useParams } from "react-router";
import posts from '../../assets/json/posts.json';
import NaoEcontrada from 'pages/NaoEncontrada';
import PaginaPadrao from 'components/PaginaPadrão';

export default function Post() {

    const paramentros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(paramentros.id);
    });

    if(!post){
        return <NaoEcontrada/>
    }

    return( 
        <Routes>
            <Route path="*" element={<PaginaPadrao/>}>
                <Route index element={
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
                }/>
            </Route>

        </Routes>
    )
}