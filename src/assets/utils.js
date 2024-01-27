export const formatDateWeek = (date) => {
  const formatDate = new Intl.DateTimeFormat("ru", {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  });
  return formatDate.format(new Date(date));
};

export const formatDateComment = (date) => {
  const formatDate = new Intl.DateTimeFormat("ru", {
    day: "numeric",
    month: "long",
  });
  return formatDate.format(new Date(date));
};

export const formatDateMonth = (date) => {
  const formatDate = new Intl.DateTimeFormat("ru", {
    month: "long",
    year: "numeric",
  });
  return formatDate.format(new Date(date));
};

export const searchPosts = (searchValueText, list) =>
  list.filter(
    ({ title, description }) =>
      title?.toLowerCase().includes(searchValueText.toLowerCase()) ||
      description?.toLowerCase().includes(searchValueText.toLowerCase())
  );

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
