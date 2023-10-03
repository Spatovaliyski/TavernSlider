import { TextControl, CheckboxControl, ColorPicker, Button, SelectControl } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

const TavernBlockControls = (props) => {
  const {
    attributes,
    setAttributes,
    paginationColor,
    setPaginationColor,
    fetchPosts,
  } = props;

  const [queryAddress, setQueryAddress] = useState(attributes.address);
  const [queryPostsCount, setQueryPostsCount] = useState(attributes.postsPerPage);
  const [showPostTitle, setShowPostTitle] = useState(attributes.showPostTitle);
  const [showPostDate, setShowPostDate] = useState(attributes.showPostDate);
  const [showPostAuthor, setShowPostAuthor] = useState(attributes.showPostAuthor);
  const [sliderSize, setSliderSize] = useState(attributes.sliderSize);

  useEffect(() => {
    setAttributes({
      showPostTitle,
      showPostDate,
      showPostAuthor,
      sliderSize
    });
  }, [showPostTitle, showPostDate, showPostAuthor, sliderSize]);

  const handleLinkAndPosts = () => {
    fetchPosts(queryAddress, queryPostsCount);
  };

  return (
    <InspectorControls>
      <div className={"tavern-form"}>
        <h3 className={"tavern-form__title"}>{__("Tavern Slider")}</h3>
        <TextControl
          label={__("Default Address")}
          type={"text"}
          value={queryAddress}
          onChange={(value) => setQueryAddress(value)}
        />
        <TextControl
          label={__("Default Number of Posts")}
          type={"number"}
          value={queryPostsCount}
          onChange={(value) => setQueryPostsCount(parseInt(value))}
        />

        <Button variant="secondary"
          onClick={() => handleLinkAndPosts()}
        >
          {__("Set")}
        </Button>

        <hr className={"divider"}></hr>

        <CheckboxControl
          label={__("Show post title")}
          checked={showPostTitle}
          onChange={() => {
            const newShowPostTitle = !showPostTitle;
            setShowPostTitle(newShowPostTitle);
            setAttributes({ ...attributes, showPostTitle: newShowPostTitle });
          }}
        />

        <CheckboxControl
          label={__("Show post date")}
          checked={showPostDate}
          onChange={() => {
            const newShowPostDate = !showPostDate;
            setShowPostDate(newShowPostDate);
            setAttributes({ ...attributes, showPostDate: newShowPostDate });
          }}
        />

        <CheckboxControl
          label={__("Show post author")}
          checked={showPostAuthor}
          onChange={() => {
            const newShowPostAuthor = !showPostAuthor;
            setShowPostAuthor(newShowPostAuthor);
            setAttributes({ ...attributes, showPostAuthor: newShowPostAuthor });
          }}
        />

        <SelectControl
          label="Maxium Slider Width"
          value={ sliderSize }
          options={ [
              { label: '100%', value: '100%' },
              { label: '960px', value: '960px' },
              { label: '540px', value: '540px' },
              { label: '480px', value: '480px' },
          ] }
          onChange={ ( newSize ) => setSliderSize( newSize ) }
        />
        
        <hr className={"divider"}></hr>

        <h3>{__('Pagination Color Picker')}</h3>
        <ColorPicker
          color={paginationColor}
          onChange={(newColor) => {
            setPaginationColor(newColor);
            setAttributes({ ...attributes, tavernPluginPaginationColor: newColor });
          }}
          enableAlpha
          defaultValue="#000"
        />
      </div>
    </InspectorControls>
  );
};


export default TavernBlockControls;
