import { TextControl } from "@wordpress/components";
import { useState, useEffect, useCallback } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import { Debouncer } from "../components/Debouncer/debounce";
import Slider from "../components/Slider/slider";
import SliderControls from "../components/Slider/sliderControls";
import TavernBlockControls from "../components/Controls/tavernBlockControls";
import apiService from "../lib/service";

import './edit.scss'

const TavernBlock = (props) => {
  const { __ } = wp.i18n;
  const { debounce } = Debouncer();
  const { attributes, setAttributes } = props;
  const blockProps = useBlockProps();

  const [posts, setPosts] = useState([]);
  const [newAddress, setNewAddress] = useState(attributes.address);

  const formatTimestamp = (inputTimestamp) => {
    const date = new Date(inputTimestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();

    return `${day}.${month}.${year}`;
  };

  const fetchPosts = async (address, postsPerPage) => {
    try {
      const data = await apiService.getPosts(address, postsPerPage);

      const formattedPosts = data.map((post) => ({
        id: post.id,
        title: post.title.rendered,
        thumbnail: post?.featured_media,
        link: post.link,
        author: post.author,
        postDate: formatTimestamp(post.date),
        postDateModified: formatTimestamp(post.modified),
        url: address,
        //content: post.content.rendered,
      }));

      setPosts(formattedPosts);
      setAttributes({
        posts: formattedPosts,
        address: address,
        postsPerPage, postsPerPage
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const fetchPostsHandler = (address, count) => {
    fetchPosts(address, count);
    setNewAddress(address);
  };

  useEffect(() => {
    fetchPosts(attributes.address, attributes.postsPerPage);
  }, [attributes.address, attributes.postsPerPage]);

  return (
    <div {...blockProps}>
      <TavernBlockControls
        attributes={attributes}
        setAttributes={setAttributes}
        paginationColor={attributes.tavernPluginPaginationColor}
        setPaginationColor={(color) => setAttributes({ tavernPluginPaginationColor: color })}
        fetchPosts={fetchPostsHandler}
      />
      
      <div className={"tavern-slider_container"}>
        <SliderControls
          paginationColor={attributes.tavernPluginPaginationColor}
          totalPosts={attributes.postsPerPage}
        />
        <Slider
          attributes={attributes}
          posts={posts}
          setAttributes={setAttributes}
        />
      </div>
    </div>
  );
};

export { TavernBlock };