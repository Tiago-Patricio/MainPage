import React from 'react'
import './Post.css'

const Post = () => {

    return (
        <>
        
        <img className="projectsTitle" src="/images/projects.PNG" alt=""/>

        <article className="Post1">
            <h1>GTFelinux</h1>
            <img className="imgPost1" src="/images/gtfelinux.JPG" alt=""/>
        </article>


        <a className = "button10"
            href = "https://github.com/Tiago-Patricio/GTFelinux"> See Project </a>



        <article className="Post2">
            <h1>Interview Simulator</h1>
            <img className="imgPost2" src="/images/interview.PNG" alt=""/>
            </article>

            
        <a className = "button11"
            href = "https://github.com/Tiago-Patricio/InterviewSimulator"> See Project </a>

    
        
        <article className="Post3">
        <h1>This very website</h1>
        <img className="imgPost2" src="/images/this.PNG" alt=""/>
     </article>



        <img className="footerPost1" src="/images/footer.PNG" alt=""/>
        <div className="moreAboutReactangle2"></div>
</>

    )

}

export default Post;

