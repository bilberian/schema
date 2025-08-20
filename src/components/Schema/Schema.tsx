import { schemaData } from '../../constants/constants';
import './Schema.css';

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
                <div className="sub-block-container" key={item.id}>
                  <div className="sub-vertical-line"></div>
                  <div className="sub-block">
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
