import { Icon } from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import { arrowLeft, arrowRight } from "@wordpress/icons";

const SliderControls = (props) => {
  const { __ } = wp.i18n;
  const {
    paginationColor,
    totalPosts
  } = props;

  const [postsCount, setPostsCount] = useState(0);
  const [controlsColor, setControlsColor] = useState(null);

  useEffect(() => {
    setPostsCount(totalPosts);
    setControlsColor(paginationColor);
  }, [totalPosts, paginationColor])
  
  return (
    <div className="tavern-slider__controls" style={{ color: controlsColor}}>
      <div className="tavern-slider__control prev"><Icon icon={arrowLeft} color={"currentColor"} fill={"currentColor"} /></div>
      <div className="tavern-slider__current">
        <span className="tavern-slider__pagination">
          <div className="current-post">1</div>
          <>{"/"}</>
          <div className="total-posts">{postsCount}</div>
        </span>
      </div>
      <div className="tavern-slider__control next"><Icon icon={arrowRight} color={"currentColor"} fill={"currentColor"} /></div>
    </div>
  )
}

export default SliderControls;