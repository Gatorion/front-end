import Aside from '../../components/Aside/Aside';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import PostImage from '../../assets/img/PostPicture.png'

const Feed = () => {
    return (
        <>
            <div className='content'>
                <Aside />
                <div className='posts'>
                    <SocialMedia
                        postText='Finalmente lançamos nossa plataforma! Esperamos que aproveitem ao máximo essa jornada astronômica! 🚀💫'
                        postImage={PostImage}
                        postLikes='1 mil'
                        postComents='175'
                        postShares='14'
                        postStatistics='50 mil'
                    />
                    <SocialMedia
                        postText='Marcha, familia! 🚀💫'
                        postImage={PostImage}
                        postLikes='666 mil'
                        postComents='23 mil'
                        postShares='13 mil'
                        postStatistics='789 mil'
                    />
                </div>
            </div>
        </>
    )
}

export default Feed;