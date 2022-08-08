import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, fetchPhotos, fetchPosts } from '../../Requests/Requests'


export const MainMenu = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.requestData.users)
  const posts = useSelector(state => state.requestData.posts)
  const photos = useSelector(state => state.requestData.photos)
  let data = []
  
  if(users.length && posts.length && photos.length){ 
    users.map( user => {
      let newData = {}

      posts.forEach( post => {
        if (user.id === post.id ){
          newData.user = user
          newData.post = post
        }
      })

      photos.forEach( photo => {
        if (user.id === photo.id ){
          newData.photo = photo
        }
      })

      data.push({...newData})
    })
  }


  useEffect( () => {
    dispatch(fetchUsers())
    dispatch(fetchPhotos())
    dispatch(fetchPosts())
  }, [])

  return (
    <div className='mainMenu_Block'>
      <div className="mainMenu_Container">
        { data.length && data.map( infoPost => 
          <div className='post_Container'>
            <div className='postInfo_Header_Container'>
            <div className="postPhoto_Header">
                <img style={{width:'150px', heigth: '150px'}} src={infoPost.photo.url} alt="notFound" />
            </div>
              <div className='postText_Header'>
                <div className='post_UserName'>Author: {infoPost.user.name}</div>
                <div className='post_CompanyName'>Company: {infoPost.user.company.name}</div>
              </div> 
            </div>
            <div className='post_Title'>Title: {infoPost.post.title}</div>
            <div className='post_Info'>{infoPost.post.body}</div>      
          </div>
        )}
      </div>
    </div>
  )
}