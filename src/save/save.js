import { useBlockProps } from "@wordpress/block-editor";

import { Icon } from "@wordpress/components";
import { arrowLeft, arrowRight } from "@wordpress/icons";

const TavernBlockSave = ({ attributes }) => {
  const { __ } = wp.i18n;
  const { posts, postsAuthors, postsThumbnails } = attributes;

  return (
    <div {...useBlockProps.save()}>
      <div className="tavern-slider" style={`max-width: ${attributes.sliderSize}`}>
        <div className="tavern-slider__controls" style={`color: ${attributes.tavernPluginPaginationColor};`}>
          <div className="tavern-slider__control prev"><Icon icon={arrowLeft} color={"currentColor"} fill={"currentColor"} /></div>
          <div className="tavern-slider__current">
            <span class="tavern-slider__pagination">
              <div className="current-post">{"0"}</div>
              <>{"/"}</>
              <div className="total-posts">{"0"}</div>
            </span>
          </div>
          <div className="tavern-slider__control next"><Icon icon={arrowRight} color={"currentColor"} fill={"currentColor"} /></div>
        </div>

        <div className="tavern-slider__slider-wrapper">
          {posts.map((post, index) => (
            <div key={post.id} className={`tavern-slider__item ${index === 0 ? "is-active" : ""}`}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                {attributes.showPostTitle && (
                  <h2 className="tavern-slider__title">{post.title}</h2>
                )}

                {attributes.showPostAuthor && (
                  <div className="author">
                    <img className="author-avatar" src={postsAuthors[index]?.avatar_urls[48]} />
                    <span className="author-name">{postsAuthors[index]?.name}</span>
                  </div>
                )}

                {attributes.showPostDate && (
                  <span className="post-modified">{post.postDateModified}</span>
                )}
              </a>
                
              <figure className="tavern-slider__image-wrapper">
                <img className="post-thumnail" src={postsThumbnails[index]} alt="" />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TavernBlockSave;