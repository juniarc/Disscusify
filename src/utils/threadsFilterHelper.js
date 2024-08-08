function filterThreadsHelper({
  threads,
  searchQuery = '',
  selectedCategory = '',
}) {
  const filteredThreads = threads.filter((thread) => {
    const matchesCategory = selectedCategory
      ? selectedCategory === thread.category
      : true;
    const matchesSearch = searchQuery
      ? thread.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return matchesSearch && matchesCategory;
  });
  return filteredThreads;
}

export default filterThreadsHelper;
