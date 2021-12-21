const paginate = (followers) => {
  const itemsPerPage = 9;
  const pages = Math.ceil(followers.length / itemsPerPage);
  // console.log(pages);
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    // console.log("start",start);
    // console.log("followers",followers.slice(start, start + itemsPerPage));
    return followers.slice(start, start + itemsPerPage);
  });
  // console.log(newFollowers);
  return newFollowers;
};

export default paginate;
