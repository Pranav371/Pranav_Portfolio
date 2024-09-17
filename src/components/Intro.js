import '../styles/Intro.css'
function Intro(){
    return(
        <div className="intro-wrapper">
            <div className="intro-1">
                <span className='text-1'>Hi! there this is</span><br></br>
                <span className='text-2'>Saini Pranav</span><br></br>
                <span className='text-3'>I am interested in</span>
                <div className='word-container'>
                    <span className='word'>Software Development</span>
                    <span className='word'>Data Science</span>
                    <span className='word'>Machine Learning</span>
                </div>
            </div>
        </div>
    );
}

export default Intro;