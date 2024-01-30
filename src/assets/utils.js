/* eslint-disable no-plusplus */
export const formatDateCreate = (date) => {
  const formatDate = new Intl.DateTimeFormat("ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formatDate.format(new Date(date));
};

export const createQueryString = (params) => {
  const searchQuery = new URLSearchParams();
  Object.entries(params).map(([key, value]) =>
    value !== undefined ? searchQuery.append(key, value) : null
  );
  return searchQuery.toString();
};

export const filterUnicum = (params) => {
  const result = params?.reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc; // если значение уже есть, то просто возвращаем аккумулятор
    }
    return [...acc, item]; // добавляем к аккумулятору и возвращаем новый аккумулятор
  }, []);
  return result;
};

export const setPrimary = (a, b) => {
  return a === b;
};

export const getPagesArray = ({ totalPages, currentPage }) => {
  const delta = window.innerWidth <= 460 ? 1 : 2;

  const pages = [];
  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    pages.push(i);
  }

  if (currentPage - delta > 5) {
    pages.unshift(Math.ceil(currentPage / 2));
  }

  if (currentPage + delta < totalPages && currentPage > 1) {
    const ofSet = (totalPages - currentPage) / 2;
    pages.push(Math.ceil(ofSet + currentPage));
  }

  pages.unshift(1);

  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
};
