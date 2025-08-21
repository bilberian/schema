import './Schema.css';
import { schemaData } from '../../constants/constants';

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
                  <div className="sub-block-container" key={item.id}>
                    <div className="sub-vertical-line"></div>
                    <div className="sub-block">
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
