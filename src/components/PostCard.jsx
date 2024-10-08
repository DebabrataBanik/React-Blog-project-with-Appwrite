import appwriteServive from '../appwrite/config.js'
import { Link } from 'react-router-dom'

function PostCard({
  $id,
  title,
  image
}) {
  return (
    <>
      <Link to={`/post/${$id}`}>

        <div className='w-full bg-gray-500 rounded-xl p-4'>
          <div className='w-full justify-center mb-4'>
            <img src={appwriteServive.filePreview(image)} alt={`Thumbnail of ${title}`} className='rounded-xl' />
          </div>
          <h2 className='text-2xl'>{title}</h2>
        </div>

      </Link>
    </>
  )
}

export default PostCard