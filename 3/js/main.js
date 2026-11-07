const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const NAMES = [
  'Артём',
  'Анна',
  'Иван',
  'Мария',
  'Александр',
  'Екатерина',
  'Дмитрий',
  'Ольга',
  'Сергей',
  'Елена'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

let commentId = 1;

const createComment = () => {
  return {
    id: commentId++,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const createComments = () => {
  const commentsCount = getRandomInteger(0, 30);

  return Array.from({ length: commentsCount }, createComment);
};

const createPhoto = (index) => {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: `Фотография номер ${index}`,
    likes: getRandomInteger(15, 200),
    comments: createComments(),
  };
};

const photos = Array.from({ length: 25 }, (_, index) => createPhoto(index + 1));