import React from 'react'
import './Post.css'

const Post = () => {

    return (
        <>
        <article className="Post1">
            <h1>GTFelinux</h1>
            <img className="imgPost1" src="/images/gtfelinux.jpg" alt=""/>
            <h3> A burglar cat that wants to steal a milk bottle from a cow.
                The burglar loses stamina as time passes, he must eliminate other cats to restore lives, he can also use other cats as checkpoints.</h3>
            
        </article>

        <article className="Post2">
        <h1>Interview Simulator</h1>
        <img className="imgPost2" src="/images/interview.png" alt=""/>
        <h3><br/><br/>Interview Simulator is a text-based program that aims to help code cadets practice and get ready for their coding interview.</h3>

        
        </article>
        
        <article className="Post3">
        <h1>This very website</h1>
        
       
        </article>
        </>
    )

}

export default Post;

