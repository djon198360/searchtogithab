export const arrayCountItems = Array.from(
  { length: 11 },
  (v, i) => i * 10
).splice(1, 10);

export const arrayActivity = {
  followers: "По кол-ву подписчиков",
  repositories: "По кол-ву репозиториев",
  joined: "По дате регистрации",
};

export const arrayRepositore = {
  desc: "По возрастанию",
  asc: "По убыванию",
};
