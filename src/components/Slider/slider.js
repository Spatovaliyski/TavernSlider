import { useEffect, useState } from "@wordpress/element";
import apiService from "../../lib/service";

const Slider = (props) => {
  const { __ } = wp.i18n;
  const { posts, attributes, setAttributes } = props;

  const [userNames, setUserNames] = useState([]);
  const [postThumbnails, setPostThumbnails] = useState([]);
  const [reInitSlider, setReInitSlider] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDetailsPromises = posts.map(async (post) => {
          try {
            const author = await apiService.getUser(post.url, post.author);
            return author;
          } catch (error) {
            console.error("Error fetching user details:", error);
            return null;
          }
        });
  
        const thumbnailsPromises = posts.map(async (post) => {
          try {
            const thumbnail = await apiService.getPostsThumbnails(post.url, post.thumbnail);
            return thumbnail?.media_details?.sizes?.full?.source_url;
          } catch (error) {
            console.error("Error fetching thumbnail details:", error);
            return null;
          }
        });
  
        const [userDetails, thumbnails] = await Promise.all([Promise.all(userDetailsPromises), Promise.all(thumbnailsPromises)]);
        
        setUserNames(userDetails);
        setPostThumbnails(thumbnails);

        setAttributes({
          postsAuthors: userNames,
          postsThumbnails: postThumbnails
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [attributes.address, attributes.postsPerPage, posts]);

  return (
    <div className={"tavern-slider"}>
      <div className="tavern-slider__slider-wrapper">
        {posts &&
          posts.map((post, index) => (
            <div key={post.id} className={`tavern-slider__item ${index === 0 ? "is-active" : ""}`}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                {attributes?.showPostTitle && <h2 className="tavern-slider__title">{post.title}</h2>}

                {attributes?.showPostAuthor && (
                  <div className="author">
                    {userNames[index] && (
                      <img className="author-avatar" src={userNames[index].avatar_urls[48]} />
                    )}
                    {userNames[index] && (
                      <span className="author-name">{userNames[index].name}</span>
                    )}
                  </div>
                )}

                {attributes?.showPostDate && <span className="post-modified">{post.postDateModified}</span>}
              </a>

              <figure className="tavern-slider__image-wrapper">
                {postThumbnails[index] && (
                  <img className="post-thumbnail" src={postThumbnails[index]} alt="" />
                )}
              </figure>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Slider;
