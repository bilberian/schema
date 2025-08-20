import './Schema.css';

const schemaData = [
  {
    id: 'A',
    name: 'Сухие смеси и бетонные полы',
    subItems: [
      { id: 'A1', name: 'Наливные полы' },
      { id: 'A2', name: 'Сухие смеси' },
      { id: 'A3', name: 'Гидроизоляция' },
      { id: 'A4', name: 'Ремонтные составы' },
      { id: 'A5', name: 'Добавки в бетон' },
    ],
  },
  {
    id: 'B',
    name: 'Оборудование помещений и зданий',
    subItems: [
      { id: 'B1', name: 'Вентиляция' },
      { id: 'B2', name: 'Кондиционирование' },
      { id: 'B3', name: 'Отопление' },
      { id: 'B4', name: 'Водоснабжение' },
      { id: 'B5', name: 'Канализация' },
    ],
  },
  {
    id: 'C',
    name: 'Механизмы и оборудование',
    subItems: [
      { id: 'C1', name: 'Насосы' },
      { id: 'C2', name: 'Компрессоры' },
      { id: 'C3', name: 'Генераторы' },
      { id: 'C4', name: 'Трубы' },
      { id: 'C5', name: 'Подъемные механизмы' },
    ],
  },
  {
    id: 'D',
    name: 'Сухие системы',
    subItems: [
      { id: 'D1', name: 'Гипсокартон' },
      { id: 'D2', name: 'Профили' },
      { id: 'D3', name: 'Крепеж' },
      { id: 'D4', name: 'Шпаклевки' },
      { id: 'D5', name: 'Грунтовки' },
    ],
  },
  {
    id: 'E',
    name: 'Оборудование',
    subItems: [
      { id: 'E1', name: 'Электрооборудование' },
      { id: 'E2', name: 'Освещение' },
      { id: 'E3', name: 'Кабели' },
      { id: 'E4', name: 'Автоматика' },
      { id: 'E5', name: 'Системы безопасности' },
    ],
  },
  {
    id: 'F',
    name: 'Отделочные материалы',
    subItems: [
      { id: 'F1', name: 'Краски' },
      { id: 'F2', name: 'Обои' },
      { id: 'F3', name: 'Плитка' },
      { id: 'F4', name: 'Лаки' },
      { id: 'F5', name: 'Клеи' },
    ],
  },
];

export default function Schema() {
  return (
    <div className="schema-container">
      <h1>Конструктивные группы</h1>
      <h3>Виды работ цеха</h3>
      <div className="schema-columns">
        {schemaData.map((block, index) => (
          <div key={block.id} className="schema-column">
            {/* Блок первого уровня */}
            <div className="main-block">
              <div className="block-number">{index + 1}</div>
              <div className="block-title">{block.name}</div>
            </div>

            {/* Линии */}
            <div className="vertical-line"></div>
            <div className="horizontal-line"></div>

            {/* Блоки второго уровня */}
            <div className="sub-blocks-row">
              {block.subItems.map((item, index) => (
                <div className="sub-block-container">
                  <div className="sub-vertical-line"></div>
                  <div key={item.id} className="sub-block">
                    <div className="sub-block-number">{index + 1}</div>
                    <div className="sub-block-title">{item.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
