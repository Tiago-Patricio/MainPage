import React from 'react'
import './Post.css'

const Post = () => {

    return (
        <div className="summonAll" id="Post">
            <img className="projectsTitle" src="/images/projects.PNG" alt=""/>
        <div className="moveAll">
        <article className="Post1">
        
            <h1>GTFelinux</h1>
            <img className="imgPost1" src="/images/gtfelinux.JPG" alt=""/>
            <h3> A burglar cat that wants to steal a milk bottle from a cow.
                The burglar loses stamina as time passes, he must eliminate other cats to restore lives, he can also use other cats as checkpoints.</h3>
            
        </article>
        <a className = "button10"
            href = "https://github.com/Tiago-Patricio/GTFelinux" > See Project </a>

        <article className="Post2">
        
        <h1>Interview Simulator</h1>
        <img className="imgPost2" src="/images/interview.PNG" alt=""/>
        <h3><br/>Interview Simulator is a text-based program that aims to help code cadets practice and get ready for their coding interview.</h3>
    </article>
    <a className = "button11"
        href = "https://github.com/Tiago-Patricio/InterviewSimulator" > See Project </a>

    
        
        <article className="Post3">
        <h1>This very website</h1>
        <img className="imgPost2" src="/images/this.PNG" alt=""/>
        <h3><br/>Project created using tools such as Html, Css, Js(React) and lot's of love.</h3>
     </article>

</div>

        <img className="footerAbout2" src="/images/footer.PNG" alt=""/>
        <div className="moreAboutReactangle2"></div>
        <div className="moreAboutReactangle3"></div>
        <div className="moreAboutReactangle4"></div>
</div>

    )

}

export default Post;

