interface TagsProps {
  label: string;
}

interface ProjectProps {
  title: string;
  desc: string;
  tags: Array<TagsProps>;
  img: string;
}
