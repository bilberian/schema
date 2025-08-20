import './Schema.css';

export const schemaData = [
  {
    id: 'A',
    name: 'Корпус',
    subItems: [
      { id: 'A1', name: 'Изготовление деталей', percent: '0.4' },
      { id: 'A2', name: 'Изготовление узлов', percent: '23.1' },
      { id: 'A3', name: 'Изготовление секций', percent: '0' },
      { id: 'A4', name: 'Формирование корпуса судна', percent: '0' },
    ],
  },
  {
    id: 'B',
    name: 'Судовые устройства и дельные вещи',
    subItems: [
      { id: 'B1', name: 'Изготовление деталей', percent: '0' },
      { id: 'B2', name: 'Изготовление узлов', percent: '0' },
      { id: 'B3', name: 'Сборка устройств', percent: '0' },
      { id: 'B4', name: 'Агрегатная сборка судовых устройств', percent: '0' },
      { id: 'B5', name: 'Монтаж на судах', percent: '0' },
      { id: 'B6', name: 'Сдача по построечным удостоверениям', percent: '0' },
    ],
  },
  {
    id: 'C',
    name: 'Оборудование помещений и палуб',
    subItems: [
      { id: 'C1', name: 'Изготовление узлов и изделий', percent: '0' },
      { id: 'C2', name: 'Монтаж изделий и сборочных единиц', percent: '0' },
      { id: 'C3', name: 'Грунтовка корпусных конструкций', percent: '0' },
      { id: 'C4', name: 'Изоляция корпусных конструкций', percent: '0' },
      { id: 'C5', name: 'Нанесение покрытий', percent: '0' },
      { id: 'C6', name: 'Нанесение палубных покрытий', percent: '0' },
      {
        id: 'C7',
        name: 'Нанесение лакокрасочных покрытий на судовые конструкции',
        percent: '0',
      },
    ],
  },
  {
    id: 'D',
    name: 'Механизмы и трубопроводы',
    subItems: [
      { id: 'D1', name: 'Изготовление деталей, узлов', percent: '0' },
      { id: 'D2', name: 'Агрегатная сборка судовых устройств', percent: '0' },
      { id: 'D3', name: 'Монтаж на судне', percent: '0' },
      { id: 'D4', name: 'Изоляция механизмов и трубопроводов', percent: '0' },
      { id: 'D5', name: 'Сдача по построечным удостоверениям', percent: '0' },
    ],
  },
  {
    id: 'E',
    name: 'Судовые системы',
    subItems: [
      { id: 'E1', name: 'Изготовление деталей, узлов', percent: '0' },
      { id: 'E2', name: 'Монтаж на судах', percent: '0' },
      { id: 'E3', name: 'Сдача по построечным удостоверениям', percent: '0' },
    ],
  },
  {
    id: 'F',
    name: 'Электрооборудование и связь',
    subItems: [
      {
        id: 'F1',
        name: 'Электромонтажные работы до сдачи материальной части',
        percent: '0',
      },
      {
        id: 'F2',
        name: 'Установка электрооборудования и оборудования связи',
        percent: '0',
      },
      { id: 'F3', name: 'Регулировочно-сдаточные работы', percent: '0' },
    ],
  },
  {
    id: 'G',
    name: 'Снабжение',
    subItems: [
      {
        id: 'G1',
        name: 'Крепление и сдача предметом судового снабжения',
        percent: '0',
      },
    ],
  },
  {
    id: 'H',
    name: 'Общесудовые работы',
    subItems: [
      {
        id: 'H1',
        name: 'Спусковые работы',
        percent: '0',
      },
      {
        id: 'H2',
        name: 'Испытания',
        percent: '0',
      },
    ],
  },
];

export default function Schema() {
  return (
    <div className="schema-container">
      <h1>Заказ №05002</h1>
      <div className="schema-columns">
        {schemaData.map((block, index) => {
          const subBlockWidth = 36; // ширина одного подблока
          const gap = 5; // расстояние между подблоками
          const totalWidth =
            block.subItems.length * subBlockWidth +
            (block.subItems.length - 1) * gap -
            (subBlockWidth - 2);

          const totalPercent = block.subItems.reduce(
            (sum, item) => sum + (+item.percent || 0),
            0
          );
          return (
            <div
              key={block.id}
              className="schema-column"
              style={
                {
                  '--min-width': block.subItems.length < 6 ? '150px' : '250px',
                } as React.CSSProperties
              }
            >
              {/* Блок первого уровня */}
              <div className="main-block">
                <div className="block-number">{index + 1}</div>
                <div className="block-container">
                  <div className="block-title">{block.name}</div>
                  <div
                    className="block-green"
                    style={
                      {
                        '--total-height': `${totalPercent}%`,
                      } as React.CSSProperties
                    }
                  ></div>
                </div>
              </div>

              {/* Линии */}
              <div className="vertical-line"></div>
              {block.subItems.length > 1 && (
                <div
                  className="horizontal-line"
                  style={
                    {
                      '--line-width': `${totalWidth}px`,
                    } as React.CSSProperties
                  }
                ></div>
              )}

              {/* Блоки второго уровня */}
              <div className="sub-blocks-row">
                {block.subItems.map((item, index) => (
                  <div className="sub-block-container">
                    <div className="sub-vertical-line"></div>
                    <div key={item.id} className="sub-block">
                      <div className="sub-block-number">{index + 1}</div>
                      <div className="sub-block-wrapper">
                        <div className="sub-block-title">{item.name}</div>
                        <div
                          className="sub-block-green"
                          style={
                            {
                              '--percent-height': `${item.percent}%`,
                            } as React.CSSProperties
                          }
                        ></div>
                      </div>
                    </div>
                    <div className="sub-block-text">{item.percent}%</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
