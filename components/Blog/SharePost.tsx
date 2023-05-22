'use client';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share';

const SharePost = ({ data }: { data: { url: string } }) => {
  const { url } = data || {};
  const status: string = 'Check out this blog from Pama!';
  const hashtag: string = 'pamaBlog';
  return (
    <>
      <FacebookShareButton url={url} quote={status} hashtag={hashtag}>
        <FacebookIcon size={32} />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={status}>
        <TwitterIcon size={32} />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={status}>
        <LinkedinIcon size={32} />
      </LinkedinShareButton>
    </>
  );
};

export default SharePost;
