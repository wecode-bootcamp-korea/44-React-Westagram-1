import React, { useRef, useState } from 'react';
import { BiImages } from 'react-icons/bi';
import './Upload.scss';

const Upload = ({ postData, setPostData, setUploadingMode }) => {
  const [image, setImage] = useState({
    preview: '',
    actualFile: '',
  });

  const [uploadData, setUploadData] = useState({
    id: Date.now().toString(),
    account: '_georgekim',
    profileImg: '/images/jungwhanKim/profile_hat.jpg',
    location: '',
    verified: false,
    content: '',
    postImg: '',
    createdAt: '방금 전',
  });

  const imageInput = useRef();

  const handleClick = () => {
    imageInput.current.click();
  };

  const handleImageUpload = event => {
    if (event.target.files.length) {
      setImage({
        preview: URL.createObjectURL(event.target.files[0]),
        actualFile: event.target.files[0],
      });
      setUploadData({
        ...uploadData,
        postImg: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleInput = event => {
    const { value, name } = event.target;
    setUploadData({
      ...uploadData,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setPostData([uploadData, ...postData]);
    setUploadingMode(false);
  };

  console.log('POSTDATA: ', postData);
  console.log(uploadData);

  return (
    <div className="upload">
      <div className="upload-wrapper">
        <div className="close" onClick={() => setUploadingMode(false)}>
          닫기
        </div>
        <div className="form-content">
          {/* 이미지 업로드용 인풋 */}
          <input
            type="file"
            accept="accept"
            style={{ display: 'none' }}
            ref={imageInput}
            onChange={handleImageUpload}
          />
          {/* 이미지 버튼 */}
          <button
            onClick={handleClick}
            className={image.preview ? 'image-fix' : 'image-upload'}
          >
            <BiImages style={{ marginRight: '4px' }} />
            이미지 {image.preview ? '다시 선택' : '선택'}
          </button>
          {/* 이미지가 있으면, 프리뷰 디스플레이 */}
          {image.preview ? (
            <img className="preview" src={image.preview} />
          ) : (
            <></>
          )}
          <input
            name="location"
            onChange={handleInput}
            className="upload-content"
            placeholder="현재 위치를 알려주세요! (e.g. 테헤란로 427)"
          />
          <input
            name="content"
            onChange={handleInput}
            className="upload-content"
            placeholder="어떤 생각을 하고 계신가요?"
          />
          <button className="btn-submit" onClick={handleSubmit}>
            포스트 업로드하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
