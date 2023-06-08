'use client';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
  EmailShareButton,
  EmailIcon,
} from 'next-share';

const SharePost = ({ data }: { data: { url: string } }) => {
  const { url } = data || {};
  const status: string = 'Check out this blog from Pama!';
  const hashtag: string = 'pama';
  return (
    <>
      <FacebookShareButton url={url} quote={status} hashtag={hashtag}>
        <FacebookIcon size={32} borderRadius={5} className="mr-2" />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={status}>
        <TwitterIcon size={32} borderRadius={5} className="mr-2" />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={status}>
        <LinkedinIcon size={32} borderRadius={5} className="mr-2" />
      </LinkedinShareButton>
      <PinterestShareButton url={url} media={status}>
        <PinterestIcon size={32} borderRadius={5} className="mr-2" />
      </PinterestShareButton>
      <EmailShareButton url={url} subject={status}>
        <EmailIcon size={32} borderRadius={5} />
      </EmailShareButton>
    </>
  );
};

export default SharePost;
