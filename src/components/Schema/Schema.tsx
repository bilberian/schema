import './Schema.css';

const schemaData = [
  {
    id: 'A',
    name: 'Сухие смеси и бетонные полы',
    subItems: [
      { id: 'A1', name: 'Наливные полы', percent: '10' },
      { id: 'A2', name: 'Сухие смеси', percent: '20' },
      { id: 'A3', name: 'Гидроизоляция', percent: '15' },
      { id: 'A4', name: 'Ремонтные составы', percent: '35' },
      { id: 'A5', name: 'Добавки в бетон', percent: '10' },
    ],
  },
  {
    id: 'B',
    name: 'Оборудование помещений и зданий',
    subItems: [
      { id: 'B1', name: 'Вентиляция', percent: '15' },
      { id: 'B2', name: 'Кондиционирование', percent: '15' },
      { id: 'B3', name: 'Отопление', percent: '20' },
      { id: 'B4', name: 'Водоснабжение', percent: '20' },
      { id: 'B5', name: 'Канализация', percent: '5' },
      { id: 'B6', name: 'Допблок', percent: '25' },
    ],
  },
  {
    id: 'C',
    name: 'Механизмы и оборудование',
    subItems: [
      { id: 'C1', name: 'Насосы', percent: '10' },
      { id: 'C2', name: 'Компрессоры', percent: '10' },
      { id: 'C3', name: 'Генераторы', percent: '10' },
      { id: 'C4', name: 'Трубы', percent: '20' },
      { id: 'C5', name: 'Подъемные механизмы', percent: '10' },
      { id: 'C6', name: 'Трубы', percent: '30' },
      { id: 'C7', name: 'Подъемные механизмы', percent: '5' },
    ],
  },
  {
    id: 'D',
    name: 'Сухие системы',
    subItems: [
      { id: 'D1', name: 'Гипсокартон', percent: '15' },
      { id: 'D2', name: 'Профили', percent: '25' },
      { id: 'D3', name: 'Крепеж', percent: '15' },
      { id: 'D4', name: 'Шпаклевки', percent: '25' },
      { id: 'D5', name: 'Грунтовки', percent: '20' },
    ],
  },
  {
    id: 'E',
    name: 'Оборудование',
    subItems: [
      { id: 'E1', name: 'Электрооборудование', percent: '25' },
      { id: 'E2', name: 'Освещение', percent: '30' },
      { id: 'E3', name: 'Кабели', percent: '5' },
      { id: 'E4', name: 'Автоматика', percent: '15' },
      { id: 'E5', name: 'Системы безопасности', percent: '15' },
    ],
  },
  {
    id: 'F',
    name: 'Отделочные материалы',
    subItems: [
      { id: 'F1', name: 'Краски', percent: '40' },
      { id: 'F2', name: 'Обои', percent: '50' },
      { id: 'F3', name: 'Плитка', percent: '10' },
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
                  <div className="sub-block-text">{item.percent}%</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
