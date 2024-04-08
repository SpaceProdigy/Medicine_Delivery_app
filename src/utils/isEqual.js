export function isEqual(obj1, obj2) {
  // Сначала проверяем, являются ли объекты одним и тем же объектом (по ссылке)
  if (obj1 === obj2) return true;

  // Затем проверяем типы объектов
  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  // Получаем ключи объектов
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Проверяем количество ключей
  if (keys1.length !== keys2.length) return false;

  // Проверяем каждое значение
  for (const key of keys1) {
    if (!isEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}
